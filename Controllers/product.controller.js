const Product = require("../Model/productSchema");

exports.addNewProduct = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await Product(data);
    await newProduct.save();
    res
      .status(200)
      .json({ status: "Success", data: "Success to add new post" });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ status: "Success", data: product });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });
    res.status(200).json({ status: "Success", data: product });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.status(200).json({ status: "Success", data: product });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};
