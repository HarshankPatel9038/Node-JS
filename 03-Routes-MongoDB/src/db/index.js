require('dotenv').config()
const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL + process.env.MONGODB_DATABASE)
            .then(() => {
                console.log('MONGODB Database Connected Successfully');
            })
            .catch((error) => console.log(error.message));
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;