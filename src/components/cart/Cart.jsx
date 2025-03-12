/*import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { CartContext } from "../context/CartContext.jsx";
import "./Cart.css";

const Cart = ({ setShowCart }) => { 
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🛒 My Cart/Basket</h2>
        <button className="close-button" onClick={() => {
          console.log("✅ X button clicked! Trying to close the cart."); 
          if (setShowCart) { 
            setShowCart(false); 
            console.log("✅ Cart is now hidden."); 
          } else {
            console.error("❌ setShowCart is undefined! Check Navbar.jsx"); 
          }
        }}>x</button>
      </div>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                  <span className="quantity-number">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
              <p className="cart-item-price">€ {item.price ? (item.price * item.quantity).toFixed(2) : "0.00"}</p>

            </div>
          ))}
          
          <h3 className="subtotal">
             Sub Total: € {cartItems.length > 0 ? cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2) : "0.00"}
          </h3>

          <div className="cart-buttons">
            <button className="continue-shopping" onClick={() => { 
              console.log("✅ Continue Shopping Clicked! Closing Cart & Navigating to Products.");
              setShowCart(false); 
              navigate("/"); 
            }}>
              Continue Shopping
            </button>
            <button className="checkout">Check Out</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;*/

/*import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { CartContext } from "../context/CartContext.jsx";
import "./Cart.css";

const Cart = ({ setShowCart }) => { 
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  return (
    <div className="cart-container">
     
      <div className="cart-header">
        <h2>🛒 My Cart/Basket</h2>
        <button className="close-button" onClick={() => {
          console.log("✅ X button clicked! Closing the cart."); 
          if (setShowCart) { 
            setShowCart(false); 
            console.log("✅ Cart is now hidden."); 
          } else {
            console.error("❌ setShowCart is undefined! Check Navbar.jsx"); 
          }
        }}>x</button>
      </div>

      
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                
                
                <div className="quantity-controls">
                  <button className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    disabled={item.quantity === 1}
                  >-</button>
                  
                  <span className="quantity-number">{item.quantity}</span>

                  <button className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>

                
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>

              
              <p className="cart-item-price">
                € {item.price ? (item.price * item.quantity).toFixed(2) : "0.00"}
              </p>
            </div>
          ))}

          
          <h3 className="subtotal">
             Sub Total: € {cartItems.length > 0 
                ? cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2) 
                : "0.00"}
          </h3>

          
          <div className="cart-buttons">
            <button className="continue-shopping" onClick={() => { 
              console.log("✅ Continue Shopping Clicked! Navigating to Home.");
              setShowCart(false); 
              navigate("/"); 
            }}>
              Continue Shopping
            </button>

            <button className="checkout">Check Out</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;*/

import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { CartContext } from "../context/CartContext.jsx";
import "./Cart.css";

const Cart = ({ setShowCart }) => { 
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  console.log("🛒 Cart Items in Cart.jsx:", cartItems); // ✅ Debugging line

  return (
    <div className="cart-container">
     
      <div className="cart-header">
        <h2>🛒 My Cart/Basket</h2>
        <button className="close-button" onClick={() => {
          console.log("✅ X button clicked! Closing the cart."); 
          if (setShowCart) { 
            setShowCart(false); 
            console.log("✅ Cart is now hidden."); 
          } else {
            console.error("❌ setShowCart is undefined! Check Navbar.jsx"); 
          }
        }}>x</button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              
              <img 
                src={item.image || item.img || "https://via.placeholder.com/50"} 
                alt={item.name || "Unnamed Product"} 
                className="cart-item-image" 
              />

              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name || "Unnamed Product"}</h3>  {/* ✅ Product name fix */}

                <div className="quantity-controls">
                  <button className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    disabled={item.quantity === 1}
                  >-</button>
                  
                  <span className="quantity-number">{item.quantity}</span>

                  <button className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>

                <button className="remove-button" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>

              <p className="cart-item-price">
                € {item.price ? (item.price * item.quantity).toFixed(2) : "0.00"}
              </p>
            </div>
          ))}

          <h3 className="subtotal">
             Sub Total: € {cartItems.length > 0 
                ? cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2) 
                : "0.00"}
          </h3>

          <div className="cart-buttons">
            <button className="continue-shopping" onClick={() => { 
              console.log("✅ Continue Shopping Clicked! Navigating to Home.");
              setShowCart(false); 
              navigate("/"); 
            }}>
              Continue Shopping
            </button>

            <button className="checkout">Check Out</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
