import crypto from "crypto";

const razorpay_order_id = "order_Rv0CDrDiPDlyhc";
const razorpay_payment_id = "pay_Rv0MchXWODXaQ6";
const secret = "G6mfvXIfZhTiGPifkFSt77LH"; // from .env

const body = razorpay_order_id + "|" + razorpay_payment_id;

const signature = crypto
  .createHmac("sha256", secret)
  .update(body)
  .digest("hex");

console.log("razorpay_signature:", signature);
