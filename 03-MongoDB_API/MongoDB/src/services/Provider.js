const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const connectPassport = async () => {
  try {
    await passport.use(new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/v1/user/google/callback"
    },
      function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
      }
    ));
    passport.serializeUser(function (user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
      done(err, id);
      // User.findById(id, function (err, user) {
      //   done(err, user);
      // });
    });
  } catch (error) {
    console.log(error.massage);
  }
}

module.exports = connectPassport;