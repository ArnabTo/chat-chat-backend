const mongoose = require('mongoose');

const connectDb = async() =>{
    try{
        const connect = await mongoose.connect(process.env.DBURI);

        console.log('Connected to DB successfully')
    }catch(error) {
            console.log('Error from DB:', error)
            process.exit();
    }
};

module.exports = connectDb;