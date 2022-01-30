const router = require("express").Router();
const Form = require("../models/Form");

router.post("/", async (req, res) => {
  const newForm = new Form(req.body);
  try {
    const savedForm = await newForm.save();
    res.status(200).json(savedForm);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
