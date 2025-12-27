import express from "express";
import { postRouter } from "./modules/post.router";

const app=express();
app.use(express.json());

app.use("/posts",postRouter);

app.get("/",(req,res)=>{
    res.send("Hello from Prisma Blog app server")
})


export default app;