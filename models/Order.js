// import mongoose from "mongoose";   

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     items: Array,
//     totalAmount: Number,
//     status: {
//       type: String,
//       enum: ["Placed", "Preparing", "Ready", "Delivered"],
//       default: "Placed",
//     },
//     isDeleted: {
//   type: Boolean,
//   default: false,
// },

//   },
//   { timestamps: true }
// );

// export default mongoose.model("Order", orderSchema);



import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: Array,
    totalAmount: Number,
    status: {
      type: String,
      enum: ["Placed", "Preparing", "Ready", "Delivered", "Cancelled"],
      default: "Placed",
    },
    cancelReason: String,
    cancelledAt: Date,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);

