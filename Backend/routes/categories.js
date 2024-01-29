const express = require("express");
const router = express.Router();
const category = require("../models/category");


// Yeni kategori oluşturma (create)
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCategory = new category({ name, img });

    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

// Tüm kategorileri getirme (Read - All)

router.get("/", async (req, res) => {
  try {
    const categories = await category.find();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

// Belirli bir kategoriyi getirme (Read - Single)

router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    try {
      const Category = await category.findById(categoryId);
      res.status(200).json(Category);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Category is not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Kategori güncelleme (update)

router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;

    const existingCategory = await category.findById(categoryId);

    if (!existingCategory){
        return (res.status(404).json({error: "Category is not found."}))
    }

    const updatedCategory = await category.findByIdAndUpdate(categoryId, updates, {new: true});

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Kategori silme (delete)


router.delete("/:categoryId", async (req, res) => {

    try {
        const categoryId = req.params.categoryId;

        const deletedCategory = await category.findOneAndDelete(categoryId);
    
        if (!deletedCategory) {
          return res.status(404).json({ error: "Category not found." });
        }
    
        res.status(200).json(deletedCategory);


    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });
  



module.exports = router;
