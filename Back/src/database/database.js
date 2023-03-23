//Database mongo
const mongoose = require('mongoose');


const contectarDb = async() =>{
    try {
        await mongoose.connect (process.env.MONGO_LOCAL);
        console.log('Conetado a la mongo')    
    }
    catch (err) {
        console.log(err)
    }
};

module.exports = contectarDb;
    

