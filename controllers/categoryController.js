import Category from "../models/Category.js";

// ➕ Add category (Admin only)
export const addCategory = async (req, res) => {
  const { name } = req.body;

  const exists = await Category.findOne({ name });
  if (exists) {
    return res.status(400).json({ message: "Category already exists" });
  }

  const category = await Category.create({ name });
  res.status(201).json(category);
};

// 📄 Get all categories (Public)
export const getCategories = async (req, res) => {
  const categories = await Category.find({ isActive: true });
  res.json(categories);
};

// 📄 Get category by ID (Public)
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(400).json({ message: "Invalid category ID" });
  }
};




// ✏️ Update category (Admin)
export const updateCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category)
    return res.status(404).json({ message: "Category not found" });

  category.name = req.body.name || category.name;
  category.isActive =
    req.body.isActive !== undefined
      ? req.body.isActive
      : category.isActive;

  await category.save();
  res.json(category);
};

// ❌ Delete category (Admin - Soft Delete)
// export const deleteCategory = async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);

//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     category.isActive = false;
//     await category.save();

//     res.json({ message: "Category deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ message: "Invalid category ID" });
//   }
// };

export const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category permanently deleted" });
};

