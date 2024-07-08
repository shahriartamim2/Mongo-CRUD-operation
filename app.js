import bodyParser from "body-parser";
import express from "express";
import {connectDb} from "./models/products.model.js";
import { createProduct, getProducts, getProductByTitle, getProductByPriceRating, deleteProduct, updateProduct } from "./controller/products.controller.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

connectDb();

app.post('/products',createProduct)
app.get('/products', getProducts)
// app.get('/products/:title', getProductByTitle)
app.get('/products/:price/:rating', getProductByPriceRating)
app.delete('/products/:title',deleteProduct)
app.put('/products/:id',updateProduct)
app.get('/',(req,res)=>{
    res.send("Alhamdulillah chole")
})

export default app;