import Food from "../models/Food.js";

// Admin add food
export const addFood = async (req, res) => {
  const food = await Food.create(req.body);
  res.status(201).json(food);
};

// Public get foods
export const getFoods = async (req, res) => {
  const foods = await Food.find({ isAvailable: true })
    .populate("category", "name");
  res.json(foods);
};

//get category by id
export const getFoodsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const foods = await Food.find({
      category: categoryId,
      isAvailable: true,
    }).populate("category", "name");

    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Admin update food
export const updateFood = async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food)
    return res.status(404).json({ message: "Food not found" }); 

  const updatedFood = await Food.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedFood);
};


// Admin delete food
// export const deleteFood = async (req, res) => {
//   const food = await Food.findById(req.params.id);
//   if (!food)
//     return res.status(404).json({ message: "Food not found" });     
//     await food.remove();    
//     res.json({ message: "Food deleted" });
// };


// Admin delete food
export const deleteFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    await Food.findByIdAndDelete(req.params.id);

    res.json({ message: "Food deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
