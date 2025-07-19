const express = require("express");
const connectDB = require("./config/db_connection");
const Categories = require("./models/categoriesModel");
const multer = require("multer");
const app = express();
const path = require("path");
connectDB();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })


app.post("/addcategory", upload.single('categoryImage'), async (request, response) => {
    const { categoryName } = request.body;
    const categoryImage = request.file.filename;

    try {

        await Categories.insertOne({category_name: categoryName, category_image: categoryImage});
        // console.log(categoryImage);
    }
    catch (err) {
        console.log("Error Inserting Category", err);
    }
})


app.listen(2000, () => {
    console.log("Server Started");
})