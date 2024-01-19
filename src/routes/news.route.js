import { Router } from "express";
const newRouter = Router();

import {
  create,
  findAll,
  topNews,
  findById,
  searchByTitle,
  byUser,
  update,
  erase,
  likeNews,
  addComment,
  deleteComment,
} from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

newRouter.post("/", authMiddleware, create);
newRouter.get("/", findAll);
newRouter.get("/top", topNews);
newRouter.get("/search", searchByTitle);
newRouter.get("/byUser", authMiddleware, byUser);
newRouter.get("/:id", authMiddleware, findById);
newRouter.patch("/:id", authMiddleware, update);
newRouter.delete("/:id", authMiddleware, erase);
newRouter.patch("/like/:id", authMiddleware, likeNews);
newRouter.patch("/comment/:id", authMiddleware, addComment);
newRouter.patch("/comment/:idNews/:idComment", authMiddleware, deleteComment);

export default newRouter;
