import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send("Alhamdulillah chole")
})

export default app;