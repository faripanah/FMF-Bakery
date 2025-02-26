/*import { useNavigate } from "react-router-dom"; 
import "./Product.css";
import PromoSection from "../PromoSection/PromoSection"; 
import FeaturedTreats from "../FeaturedTreats/FeaturedTreats";

// ✅ Import images from src/assets/Images/
import applePie from "../assets/Images/applepie.png";
import applePie1 from "../assets/Images/applepie1.png";
import baket from "../assets/Images/baket.png";
import bread1 from "../assets/Images/bread 1.png"; 
import bread2 from "../assets/Images/bread2.png";
import bread3 from "../assets/Images/bread3.png";

const products = [
  { id: 1, name: "Apple Pie", price: 15, image: applePie },
  { id: 2, name: "Apple Pie Special", price: 20, image: applePie1 },
  { id: 3, name: "Baguette", price: 20, image: baket },
  { id: 4, name: "Whole Grain Bread", price: 20, image: bread1 },
  { id: 5, name: "Soft Bread", price: 30, image: bread2 },
  { id: 6, name: "Crunchy Bread", price: 10, image: bread3 },
];

const Product = () => {
  const navigate = useNavigate(); 

  return (
    <div className="product-page">
      <h2>Top Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />

            
            <button className="info-icon" onClick={() => navigate(`/product/${product.id}`)}>
              i
            </button>

            <h3>{product.name}</h3>
            <p>€ {product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>

      <PromoSection />
      <FeaturedTreats />
    </div>
  );
};

export default Product;*/

/*import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate for navigation
import { useContext } from "react"; // ✅ Import useContext to access CartContext
import { CartContext } from "../context/CartContext.jsx"; // ✅ Import Cart Context
import "./Product.css";
import PromoSection from "../PromoSection/PromoSection"; 
import FeaturedTreats from "../FeaturedTreats/FeaturedTreats";

// ✅ Import images from src/assets/Images/
import applePie from "../assets/Images/applepie.png";
import applePie1 from "../assets/Images/applepie1.png";
import baket from "../assets/Images/baket.png";
import bread1 from "../assets/Images/bread 1.png"; // ✅ Fixed: No space in filename
import bread2 from "../assets/Images/bread2.png";
import bread3 from "../assets/Images/bread3.png";

const products = [
  { id: 1, name: "Apple Pie", price: 15, image: applePie },
  { id: 2, name: "Apple Pie Special", price: 20, image: applePie1 },
  { id: 3, name: "Baguette", price: 20, image: baket },
  { id: 4, name: "Whole Grain Bread", price: 20, image: bread1 },
  { id: 5, name: "Soft Bread", price: 30, image: bread2 },
  { id: 6, name: "Crunchy Bread", price: 10, image: bread3 },
];

const Product = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation
  const { addToCart } = useContext(CartContext); // ✅ Access Cart Context

  return (
    <div className="product-page">
      <h2>Top Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />

            
            <button className="info-icon" onClick={() => navigate(`/product/${product.id}`)}>
              i
            </button>

            <h3>{product.name}</h3>
            <p>€ {product.price}</p>

            
            <button className="add-to-cart" onClick={() => { 
              addToCart(product);  // ✅ Add product to cart
              navigate("/cart");   // ✅ Redirect to cart
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <PromoSection />
      <FeaturedTreats />
    </div>
  );
};

export default Product;*/

import { useNavigate } from "react-router-dom"; 
import { useContext } from "react"; 
import { CartContext } from "../context/CartContext.jsx"; 
import "./Product.css";
import PromoSection from "../PromoSection/PromoSection"; 
import FeaturedTreats from "../FeaturedTreats/FeaturedTreats";
import applePie from "../assets/Images/applepie.png";
import applePie1 from "../assets/Images/applepie1.png";
import baket from "../assets/Images/baket.png";
import bread1 from "../assets/Images/bread 1.png"; 
import bread2 from "../assets/Images/bread2.png";
import bread3 from "../assets/Images/bread3.png";

const products = [
  { id: 1, name: "Apple Pie", price: 15, image: applePie },
  { id: 2, name: "Apple Pie Special", price: 20, image: applePie1 },
  { id: 3, name: "Baguette", price: 20, image: baket },
  { id: 4, name: "Whole Grain Bread", price: 20, image: bread1 },
  { id: 5, name: "Soft Bread", price: 30, image: bread2 },
  { id: 6, name: "Crunchy Bread", price: 10, image: bread3 },
];

const Product = () => {
  const navigate = useNavigate(); 
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="product-page">
      <h2>Top Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />

            <button className="info-icon" onClick={() => navigate(`/product/${product.id}`)}>
              i
            </button>

            <h3>{product.name}</h3>
            <p>€ {product.price}</p>

            {/* ✅ Fix: Clicking "Add to Cart" increases quantity instead of overwriting */}
            <button className="add-to-cart" onClick={() => { 
              addToCart(product);  
              navigate("/cart");   
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <PromoSection />
      <FeaturedTreats />
    </div>
  );
};

export default Product;

