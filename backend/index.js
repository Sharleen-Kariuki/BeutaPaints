const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

app.use(express.json());
app.use(cors());

//Database connection with mongoDB
mongoose.connect("mongodb+srv://sharleenwambui28:Kariuki28@cluster0.t7ewm.mongodb.net/e-commerce", {
    serverSelectionTimeoutMS: 30000,
})

//API Creation
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }
}
)

const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single('product'), (req, res) => {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: `${req.file.fieldname}_${Date.now()}${path.extname(req.file.originalname)}`,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        ACL: 'public-read'
    };

    s3.upload(params, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error -> " + err });
        }
        res.json({
            success: 1,
            image_url: data.Location
        });
    });
});

//Schema for creating products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    }
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,

    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name:req.body.name,
    })
})

//Creating API For deleting products
app.post('/removeproduct',async (req, res) => {
    await Product.findOneAndDelete({
        id:req.body.id,
    });
    console.log("Removed");
    res.json({
        success: true,
        name:req.body.name,
    })
})


//Creating API for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})



app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port" + port)
    }
    else{
        console.log("Error ", + error)
    }

})