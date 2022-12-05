const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  img: [
    {
      type: Array,
      required: true
    },
  ],
  vote: {
    type: Number,
  },
  filter: [
    {
      type: String,
      required: true
    },
  ],
});

module.exports = mongoose.model("filters", filterSchema);