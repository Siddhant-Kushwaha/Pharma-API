const router = require("express").Router();
const Product = require("../models/Product");

// create Product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update Product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete Product
router.delete("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  try {
    await product.delete();
    res.status(200).json("Product deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get Product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get Product
router.get("/", async (req, res) => {
  const catName = req.query.therapy;
  // console.log(CatName);
  try {
    let products;
    if (catName) {
      products = await Product.find({
        therapy: {
          $in: [catName],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
