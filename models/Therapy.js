const mongoose = require("mongoose");

const TherapySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Therapy", TherapySchema);
