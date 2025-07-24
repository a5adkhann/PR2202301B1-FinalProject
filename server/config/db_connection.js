
const mongoose = require("mongoose");

const connectDb = async() => {
    try{
     await mongoose.connect("mongodb+srv://asadkaptech:pr2-202301b1@cluster0.ervqlft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
     console.log("Mongodb connected successfully");
    }
    catch(error){
    console.log("error connecting" , error);
    }
}

module.exports = connectDb;
// connectDb();