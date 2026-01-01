import { Post } from "../../generated/prisma/client";
import { prisma } from "../lib/prisma";

const createPost = async (
  data: Omit<Post, "id" | "createdAt" | "updatedAt" | "autherId">,
  userId: string
) => {
  const result = await prisma.post.create({
    data: {
      ...data,
      autherId: userId,
    },
  });
  return result;
};

const getAllPost=async()=>{
    const allPost=prisma.post.findMany();
    return allPost;
}

export const postService = {
  createPost,
  getAllPost
};
