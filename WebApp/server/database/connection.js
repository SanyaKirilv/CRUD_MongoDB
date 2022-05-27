const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MongoDB_url).then(() => {
            console.log("Connected to Database")
        })
    }catch(e){
        console.log("Not Connected to Database ERROR! ", e)
    }
}

module.exports = connectDB