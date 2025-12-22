import Order from "../models/Order.js";

// Place order (Customer)
export const placeOrder = async (req, res) => {
  const order = await Order.create({
    user: req.user.id,
    items: req.body.items,
    totalAmount: req.body.totalAmount,
  });
  res.status(201).json(order);
};

// Get user orders
export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id, isDeleted: false, });
  res.json(orders);
};

// Admin get all orders
export const getAllOrders = async (req, res) => {
  const orders = await Order.find({ isDeleted: false }).populate("user", "name email");
  res.json(orders);
};

// Update order status (Admin)
export const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  order.status = req.body.status;
  await order.save();
  res.json(order);
};


// Admin delete order (Soft delete)
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (["Ready", "Delivered"].includes(order.status)) {
      return res.status(400).json({
        message: "Cannot delete order after food is ready or delivered",
      });
    }

    order.isDeleted = true;
    await order.save();

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Customer cancel order
export const cancelOrderByCustomer = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Order must belong to logged-in customer
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not your order" });
    }

    // Check status
    if (order.status !== "Placed") {
      return res.status(400).json({
        message: "Order cannot be cancelled at this stage",
      });
    }

    order.status = "Cancelled";
    order.cancelReason = req.body.reason || "Cancelled by customer";
    order.cancelledAt = new Date();

    await order.save();

    res.json({ message: "Order cancelled successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
