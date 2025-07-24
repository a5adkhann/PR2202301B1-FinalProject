const mongoose = require("mongoose");

const categoriesModel = new mongoose.Schema({

category_Name : String,
category_Image : String 

})

module.exports = mongoose.model("Categories" , categoriesModel)

