const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "Please fill title field"],
    },

    description: {
      type: "String",
      required: [true, "Please fill description field"],
    },
  },

  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
