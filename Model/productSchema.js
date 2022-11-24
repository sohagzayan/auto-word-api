const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  car_name: {
    type: String,
    maxLength: [15, "Name must be more than 15 characters"],
    trim: true,
    required: [true, "car name required"],
  },
  mile_range: {
    type: String,
    maxLength: [10, "mile range maximum length 10 characters"],
    required: [true, "location required"],
  },
  location: {
    type: String,
    trim: true,
    required: [true, "location required"],
  },
  engine: {
    type: String,
    trim: true,
    required: [true, "engine required"],
  },
  transmission: {
    type: String,
    trim: true,
    required: [true, "transmission required"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Number must required"],
  },
  image: {
    type: String,
    trim: true,
    required: [true, "image url must required"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
