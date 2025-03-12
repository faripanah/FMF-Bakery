/*import React from "react";

const ItemInfo = ({ item, onClose }) => {
  return (
    <div className="item-info-overlay">
      <div className="item-info">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={item.img} alt={item.title} className="item-info-img" />
        <h3 className="item-info-title">{item.title}</h3>
        <p className="item-info-desc">{item.desc}</p>
        <p className="item-info-price">${item.price.toFixed(2)}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemInfo;*/

/*import React, { useContext } from "react";  // ✅ Keep Only One Import
import { CartContext } from "../components/context/CartContext";
import "./ItemInfo.css";

const ItemInfo = ({ item, onClose }) => {
  const { addToCart } = useContext(CartContext); // ✅ Access addToCart function

  return (
    <div className="item-info-overlay">
      <div className="item-info">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={item.img} alt={item.title} className="item-info-img" />
        <h3 className="item-info-title">{item.title}</h3>
        <p className="item-info-desc">{item.desc}</p>
        <p className="item-info-price">€{parseFloat(item.price).toFixed(2)}</p>

        
        <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemInfo;*/

import React, { useContext } from "react";  // ✅ Keep Only One Import
import { CartContext } from "../components/context/CartContext";
import "./ItemInfo.css";

const ItemInfo = ({ item, onClose }) => {
  const { addToCart } = useContext(CartContext); // ✅ Access addToCart function

  return (
    <div className="item-info-overlay">
      <div className="item-info">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={item.img} alt={item.title} className="item-info-img" />
        <h3 className="item-info-title">{item.title}</h3>
        <p className="item-info-desc">{item.desc}</p>
        <p className="item-info-price">€{parseFloat(item.price).toFixed(2)}</p>

        {/* ✅ Fix: Ensure correct name is passed when adding to cart */}
        <button 
          className="add-to-cart-btn" 
          onClick={() => addToCart({
            id: item.id,
            name: item.title || "Unnamed Product",  // ✅ Ensures name is correctly passed
            price: item.price,
            image: item.img
          })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemInfo;

