const Product = require('../models/Product');

// Create a new product - Luo uusi tuote
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, imageUrl, ingredients, rating, reviews, category, weight } = req.body;
    const newProduct = new Product({ name, description, price, stock, imageUrl, ingredients, rating, reviews, category, weight });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct }); // Tuote luotu onnistuneesti
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error }); // Virhe tuotteen luomisessa
  }
};

// Get all products - Hae kaikki tuotteet
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error }); // Virhe tuotteiden haussa
  }
};

// Get a product by ID - Hae tuote ID:n perusteella
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // Tuotetta ei löytynyt
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error }); // Virhe tuotteen haussa
  }
};

// Update a product - Päivitä tuote
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, stock, imageUrl, ingredients, rating, reviews, category, weight } = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, { name, description, price, stock, imageUrl, ingredients, rating, reviews, category, weight }, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // Tuotetta ei löytynyt
    }
    res.json({ message: 'Product updated successfully', product }); // Tuote päivitetty onnistuneesti
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error }); // Virhe tuotteen päivittämisessä
  }
};

// Delete a product - Poista tuote
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // Tuotetta ei löytynyt
    }
    res.json({ message: 'Product deleted successfully' }); // Tuote poistettu onnistuneesti
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error }); // Virhe tuotteen poistamisessa
  }
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
