const Product = require('../Model/productModel');

// Logic only, no messages or status codes
const createProduct = async (productData) => {
  return await Product.create(productData);
};

const getAllProducts = async () => {
  return await Product.find();
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports ={
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}