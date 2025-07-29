
const mongoose = require("mongoose");
const productsModel = new mongoose.Schema({
 
    product_Name : String,
    product_Price : Number,
    product_Image : String,
    product_Category : String
     
})

module.exports = mongoose.model("Products" , productsModel)