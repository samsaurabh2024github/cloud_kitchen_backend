import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Food", foodSchema);
