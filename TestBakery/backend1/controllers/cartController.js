const CartItem = require("../models/cartModel");

// Get cart items - Hae ostoskorin tuotteet
const getCartItems = async (req, res) => {
  try {
    const cart = await CartItem.find(); // Get all cart items - Hae kaikki ostoskorin tuotteet
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving cart items" });
  }
};

// Add an item to the cart - Lisää tuote ostoskoriin
const addCartItem = async (req, res) => {
  const { id, name, price, image } = req.body;
  if (!id || !name || !price || !image) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    let item = await CartItem.findOne({ id });

    if (item) {
      item.quantity += 1; // Increase quantity if item exists - Lisää määrää, jos tuote on jo ostoskorissa
      await item.save();
    } else {
      item = new CartItem({ id, name, price, image, quantity: 1 });
      await item.save();
    }

    res.json(await CartItem.find()); // Return updated cart - Palauta päivitetty ostoskori
  } catch (error) {
    res.status(500).json({ error: "Error adding item to cart" });
  }
};

module.exports = { getCartItems, addCartItem };
