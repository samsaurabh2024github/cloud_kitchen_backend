import express from "express";
import {
  addCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} from "../controllers/categoryController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Public
router.get("/", getCategories);

// Admin
router.post("/", protect, adminOnly, addCategory);
router.put("/:id", protect, adminOnly, updateCategory);
router.get("/:id", getCategoryById);

router.delete("/:id", protect, adminOnly, deleteCategory);

export default router;
