import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middlewares.js"
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

newRouter.get("/", findAll);
newRouter.get("/top", topNews);
newRouter.get("/search", searchByTitle);

newRouter.use(authMiddleware);
newRouter.post("/", authMiddleware, create);

newRouter.use(validId)
newRouter.get("/byUser", authMiddleware, byUser);
newRouter.get("/:id", authMiddleware, findById);
newRouter.patch("/:id", authMiddleware, update);
newRouter.delete("/:id", authMiddleware, erase);
newRouter.patch("/like/:id", authMiddleware, likeNews);
newRouter.patch("/comment/:id", authMiddleware, addComment);
newRouter.patch("/comment/:idNews/:idComment", authMiddleware, deleteComment);

export default newRouter;
