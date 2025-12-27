import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello from Prisma Blog app server")
})


export default app;