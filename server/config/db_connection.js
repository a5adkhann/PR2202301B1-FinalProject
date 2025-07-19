const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://asadkaptech:pr2-202301b1@cluster0.ervqlft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/estore");
        console.log("MongoDB Connected Successfully");
    }
    catch(err){
        console.log("Error connecting DB", err);
    }
}

module.exports = connectDB;