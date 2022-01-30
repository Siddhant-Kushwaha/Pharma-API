const router = require("express").Router();
const Therapy = require("../models/Therapy");

router.post("/", async (req, res) => {
  const newTherapy = new Therapy(req.body);
  try {
    const savedTherapy = await newTherapy.save();
    res.status(200).json(savedTherapy);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const therapies = await Therapy.find();
    res.status(200).json(therapies);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
