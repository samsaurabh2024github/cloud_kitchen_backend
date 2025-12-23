// // import mongoose from "mongoose";   

// // const orderSchema = new mongoose.Schema(
// //   {
// //     user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// //     items: Array,
// //     totalAmount: Number,
// //     status: {
// //       type: String,
// //       enum: ["Placed", "Preparing", "Ready", "Delivered"],
// //       default: "Placed",
// //     },
// //     isDeleted: {
// //   type: Boolean,
// //   default: false,
// // },

// //   },
// //   { timestamps: true }
// // );

// // export default mongoose.model("Order", orderSchema);



// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     items: Array,
//     totalAmount: Number,
//     status: {
//       type: String,
//       enum: ["Placed", "Preparing", "Ready", "Delivered", "Cancelled"],
//       default: "Placed",
//     },
//     cancelReason: String,
//     cancelledAt: Date,
//     payment: {
//   orderId: String,
//   paymentId: String,
//   status: String,
// },

//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
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

    payment: {
      razorpayOrderId: String,
      razorpayPaymentId: String,
      razorpaySignature: String,
      status: {
        type: String,
        enum: ["Pending", "Paid", "Failed"],
        default: "Pending",
      },
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
