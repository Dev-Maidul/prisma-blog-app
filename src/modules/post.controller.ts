import { Request, Response } from "express"
import { postService } from "./post.service"

const createPost=async (req:Request,res:Response)=>{
    try {
        const result = await postService.createPost(req.body);
        res.status(201).json({
            message:"Post created successlly",
            data: result
        })
    } catch (error:any) {
        res.status(400).json({
            message: "Post creation faild",
            details: error
        })
    }
}

const getAllPost=async(req:Request,res:Response)=>{
    try {
        const result=await postService.getAllPost();
        res.status(200).json({
            message:"Successfully retrive all post",
            data:result
        })
    } catch (error:any) {
        res.status(400).json({
            message:"Something went wrong",
            details:error
        })
    }
}


export const postController={
    createPost,getAllPost
}