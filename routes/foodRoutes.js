import express from "express";
import { addFood, getFoods, getFoodsByCategory, updateFood, deleteFood } from "../controllers/foodController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/", protect, adminOnly, addFood);
router.get("/category/:categoryId", getFoodsByCategory);
router.put("/:id", protect, adminOnly, updateFood);
router.delete("/:id", protect, adminOnly, deleteFood);

export default router;
