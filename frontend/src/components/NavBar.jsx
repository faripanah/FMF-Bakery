import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import logo from "../assets/Images/bakerylogo.png";
import Cart from "../products/Cart.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false); 

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Bakery Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#find-store">Find Store</a></li>
          </ul>
        </nav>

        <div className="icons">
          <i className="fas fa-search" title="Search"></i>

          {/* ✅ Cart Icon - Toggles Cart Visibility */}
          <i className="fas fa-shopping-cart" onClick={() => {
            console.log("🛒 Cart Icon Clicked!"); 
            setShowCart(!showCart);
          }} title="Cart">
            ({cartItems.length})
          </i>

          <i className="fas fa-user" title="User"></i>
        </div>
      </header>

      {/* ✅ Pass setShowCart to Cart */}
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Navbar;
