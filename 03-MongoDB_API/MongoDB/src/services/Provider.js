const passport = require('passport');
const Users = require('../models/users.model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const connectPassport = async () => {
  try {
    await passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/v1/user/google/callback"
    },
      async function (accessToken, refreshToken, profile, cb) {
        // console.log(profile);

        const user = await Users.findOne({ googleId: profile.id });

        if (!user) {
          const user = await Users.create({
            googleId: profile.id,
            name: profile.displayName,
            role: 'user'
          })

          return cb(null, user._id);
        }

        return cb(null, user._id);
      }
    ));


    await passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/v1/user/facebook/callback"
    }, async function (accessToken, refreshToken, profile, cb) {
      // console.log(profile);

      const user = await Users.findOne({ facebookId: profile.id });
      // console.log('facebook', user);

      if (!user) {
        const user = await Users.create({
          facebookId: profile.id,
          name: profile.displayName,
          role: 'user'
        })

        return cb(null, user._id);
      }

      return cb(null, user._id);
    }
    ));

    passport.serializeUser(function (user, done) {
      done(null, user._id);
    });

    passport.deserializeUser(async function (id, done) {
      // await Users.findById(id, function (err, user) {
      //   done(err, user);
      // });

      const user = await Users.findOne({ _id: id });

      done(null, user);

    });
  } catch (error) {
    console.log(error.massage);
  }
}

module.exports = connectPassport;