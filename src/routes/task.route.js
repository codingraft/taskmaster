import express from "express";
import {
  createTask,
  getMyTasks,
  updateTaskStatus,
  addComment,
  uploadAttachment,
} from "../controllers/task.controller.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";

const router = express.Router();

router.post("/", protectedRoute, createTask);
router.get("/", protectedRoute, getMyTasks);
router.patch("/:id/status", protectedRoute, updateTaskStatus);
router.post("/:id/comments", protectedRoute, addComment);

export default router;
