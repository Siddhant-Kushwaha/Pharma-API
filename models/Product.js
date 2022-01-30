const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    molecules: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      required: false,
    },
    strength: {
      type: String,
      required: false,
    },
    form: {
      type: String,
      required: false,
    },
    therapy: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
