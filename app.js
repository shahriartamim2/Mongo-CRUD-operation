import bodyParser from "body-parser";
import express from "express";
import connectDb from "./models/products.model.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

connectDb();
app.get('/',(req,res)=>{
    res.send("Alhamdulillah chole")
})

export default app;