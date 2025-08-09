
const express = require("express");
const connectDb = require("./config/db_connection");
const Categories = require("./models/categoriesModel");
const Products = require("./models/productsModel");
const Registeration = require("./models/registerationsModel");
const Orders = require("./models/orderswModel");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

app.post("/addCategory" , upload.single('categoryImage'), async(request , response) => {

    const {categoryName } = request.body;
    const categoryImage = request.file.filename;

    try{
        await Categories.insertOne({category_Name : categoryName , category_Image : categoryImage});
        response.status(200).send({message: "Category Added Successfully"});
    }
    catch(error){
        console.log("error inserting category");
    }
})


app.get("/viewCategory" , async(req, res) =>{
    try{

          const categories = await Categories.find();
          res.status(200).json({ categories });

    }catch (error){
        console.log("error listing category");
    }
})

//product code

app.post("/addProduct" , upload.single('productImage'), async(request , response) =>{
    const {productName} = request.body;
    const {productPrice} = request.body;
    const productImage = request.file.filename;
    console.log("add product successfully");
    try{

          await Products.insertOne({product_Name : productName , product_Price : productPrice, product_Image : productImage});
          response.status(200).send({message: "Product added successfully"});
        
        }catch(error){
          console.log("error in inserting product ")
    }
})

app.get("/viewProducts" , async(req , res) =>{
    try{
    const products = await Products.find();
    res.status(200).json({products});
    }
    catch(error){
      console.log("error listing Products");

    }

})

app.delete("/deleteCategory/:id" , async(request , response) =>{
    const id = request.params.id;
   try{
     await Categories.deleteOne({_id : id});
     response.status(200).send({message : "category deleted successfully"});
   }catch(error){
      console.log(error);
   }
})

app.delete("/deleteProduct/:id" , async(request , response) =>{
    const id = request.params.id;
   try{
     await Products.deleteOne({_id : id});
     response.status(200).send({message : "product deleted successfully"});
   }catch(error){
      console.log(error);
   }
})

app.post("/register", async(request, response) => {
    try {
        const { name, email, password } = request.body;

        const hashPassword = await bcrypt.hash(password, 10);
        await Registeration.insertOne({name, email, password: hashPassword});
        response.status(200).send({message: "User Registered Successfully"});
    }
    catch(err){
        console.log(err);
    }
})


app.post("/login", async(request, response) => {
        const {email, password} = request.body;

        const registeredUser = await Registeration.findOne({email: email});
        console.log(registeredUser);
        if(registeredUser){
            const isMatch = await bcrypt.compare(password, registeredUser.password);
            if(isMatch){
                response.status(200).send({message: "Logged in successfully", registeredUser});
            }
            else {
                response.status(200).send({message: "Incorrect Credentials"});
            }
        }
        else {
            response.status(200).send({message: "User don't exist"});
        }
})

app.post("/neworder", async(request, response) => {
    try {
        const { orders } = request.body;

        await Orders.insertMany({ product_name: orders.pName, product_price: orders.pPrice, product_quanity: orders.pQuantity, total_amount: orders.total_amount });
        response.status(200).send({message: "Order placed successfully"});
    }
    catch(err){
        console.log(err);
    }
})




app.listen(2000, () => {
    console.log("Server Started");
})