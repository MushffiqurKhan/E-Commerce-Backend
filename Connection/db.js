const mongoose = require('mongoose')
const dotenv = require('dotenv') 

dotenv.config();


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log('Mongo DB Connected Succesfully');
    }catch (err){
        console.error('Mongo DB Not Connected',err.message);
        process.exit(1);
    }
};

module.exports = connectDB