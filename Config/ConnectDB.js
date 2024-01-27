const mongoose = require('mongoose')

const ConnectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/')
        console.log("DB is Connected")
    } catch (error) {
        console.log(error)      
    }
}

module.exports = ConnectDB
