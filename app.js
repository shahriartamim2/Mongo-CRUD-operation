import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Alhamdulillah chole")
})

export default app;