import express from "express";
import { postRouter } from "./modules/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
const app=express();
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.use("/posts",postRouter);

app.get("/",(req,res)=>{
    res.send("Hello from Prisma Blog app server")
})


export default app;