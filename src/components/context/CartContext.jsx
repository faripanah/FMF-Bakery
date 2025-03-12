/*import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // ✅ Load cart from localStorage on page refresh
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // ✅ Save cart items to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add to Cart Function
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Update Quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    );
  };

  // ✅ Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Calculate Total Price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) || 0) * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;*/

/*import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // ✅ Load cart from localStorage on page refresh
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("❌ Error loading cart from localStorage:", error);
      return [];
    }
  });

  // ✅ Save cart items to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add to Cart Function (Prevents duplicate items)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Update Quantity (Removes item when quantity is zero)
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      quantity > 0
        ? prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        : prev.filter((item) => item.id !== id) // Remove if quantity reaches zero
    );
  };

  // ✅ Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Calculate Total Price (Handles price as string or number)
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + (parseFloat(item.price) || 0) * item.quantity, 0)
      .toFixed(2);
  };

  // ✅ Clear Cart after Checkout
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, getTotalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
*/
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // ✅ Load cart from localStorage on page refresh
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("❌ Error loading cart from localStorage:", error);
      return [];
    }
  });

  const [cartCount, setCartCount] = useState(0); // ✅ New: Tracks total cart items

  // ✅ Save cart items to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // ✅ Update cart count (total quantity of all items)
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  }, [cartItems]);

  // ✅ Add to Cart Function (Prevents duplicate items)
  const addToCart = (product) => {
    console.log("🛒 Adding to Cart:", product); // ✅ Debugging - Check product details

    if (!product.name) {
      console.error("❌ Missing product name! Check the product being passed:", product);
    }

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Update Quantity (Removes item when quantity is zero)
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      quantity > 0
        ? prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        : prev.filter((item) => item.id !== id) // Remove if quantity reaches zero
    );
  };

  // ✅ Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Calculate Total Price (Handles price as string or number)
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + (parseFloat(item.price) || 0) * item.quantity, 0)
      .toFixed(2);
  };

  // ✅ Clear Cart after Checkout
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
    setCartCount(0); // ✅ Reset count after checkout
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, updateQuantity, removeFromCart, getTotalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
