/*import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ProductDisplay.css"; // ✅ Ensure you import the correct CSS
import applePie from "../assets/Images/applepie.png";
import applePie1 from "../assets/Images/applepie1.png";
import baket from "../assets/Images/baket.png";
import bread1 from "../assets/Images/bread 1.png";
import bread2 from "../assets/Images/bread2.png";
import bread3 from "../assets/Images/bread3.png";

const products = [
  { id: 1, name: "Apple Pie", price: 15, image: applePie, description: "Delicious apple pie made with fresh apples.", ingredients: "Apples, Flour, Sugar, Butter" },
  { id: 2, name: "Apple Pie Special", price: 20, image: applePie1, description: "A special edition of our apple pie with extra filling.", ingredients: "Apples, Extra Sugar, Butter, Cinnamon" },
  { id: 3, name: "Baguette", price: 20, image: baket, description: "Classic French baguette with a crispy crust.", ingredients: "Flour, Water, Yeast, Salt" },
  { id: 4, name: "Whole Grain Bread", price: 20, image: bread1, description: "Healthy whole grain bread with rich fiber.", ingredients: "Whole Wheat Flour, Water, Yeast, Salt" },
  { id: 5, name: "Soft Bread", price: 30, image: bread2, description: "Soft and fluffy bread perfect for sandwiches.", ingredients: "Flour, Milk, Sugar, Butter" },
  { id: 6, name: "Crunchy Bread", price: 10, image: bread3, description: "Crispy and crunchy bread with sesame seeds.", ingredients: "Flour, Sesame Seeds, Yeast, Salt" },
];

const ProductDisplay = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = products.find((p) => p.id === Number(id)); // Find product by ID
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // ✅ Manage tabs

  return (
    <div className="product-display-container">
      <div className="product-display">
        
        <div className="image-section">
          <img src={product.image} alt={product.name} />
        </div>

        
        <div className="details-section">
          <h2>{product.name}</h2>
          <p className="price">€{product.price}</p>

          
          <div className="quantity-controls">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

         
          <button className="add-to-cart">Add to Cart</button>

          
          <div className="tabs">
            <div className={`tab ${activeTab === "description" ? "active" : ""}`} onClick={() => setActiveTab("description")}>Product Description</div>
            <div className={`tab ${activeTab === "ingredients" ? "active" : ""}`} onClick={() => setActiveTab("ingredients")}>Ingredients</div>
          </div>

          
          <div className="tab-content">
            {activeTab === "description" ? <p>{product.description}</p> : <p>{product.ingredients}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;*/
import { useParams, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { useState } from "react";
import "./ProductDisplay.css"; 
import applePie from "../assets/Images/applepie.png";
import applePie1 from "../assets/Images/applepie1.png";
import baket from "../assets/Images/baket.png";
import bread1 from "../assets/Images/bread 1.png";
import bread2 from "../assets/Images/bread2.png";
import bread3 from "../assets/Images/bread3.png";

const products = [
  { id: 1, name: "Apple Pie",  image: applePie, description: "Delicious apple pie made with fresh apples.", ingredients: "Apples, Flour, Sugar, Butter", rating: 4.5, reviews: 20 },
  { id: 2, name: "Apple Pie Special",  image: applePie1, description: "A special edition of our apple pie with extra filling.", ingredients: "Apples, Extra Sugar, Butter, Cinnamon", rating: 5, reviews: 35 },
  { id: 3, name: "Baguette",  image: baket, description: "Classic French baguette with a crispy crust.", ingredients: "Flour, Water, Yeast, Salt", rating: 4.0, reviews: 18 },
  { id: 4, name: "Whole Grain Bread", image: bread1, description: "Healthy whole grain bread with rich fiber.", ingredients: "Whole Wheat Flour, Water, Yeast, Salt", rating: 4.8, reviews: 25 },
  { id: 5, name: "Soft Bread",  image: bread2, description: "Soft and fluffy bread perfect for sandwiches.", ingredients: "Flour, Milk, Sugar, Butter", rating: 4.2, reviews: 15 },
  { id: 6, name: "Crunchy Bread", image: bread3, description: "Crispy and crunchy bread with sesame seeds.", ingredients: "Flour, Sesame Seeds, Yeast, Salt", rating: 4.7, reviews: 22 },
];

const ProductDisplay = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Hook for close button
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // ✅ Function to Generate Stars Based on Rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {"⭐".repeat(fullStars)}
        {halfStar ? "✨" : ""}
      </>
    );
  };

  return (
    <div className="product-display-container">
      <div className="product-display">
        
        {/* ❌ Close Button - Ensure it's inside the container */}
        <button className="close-button" onClick={() => navigate(-1)}>x</button>

        {/* Image Section */}
        <div className="image-section">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Details Section */}
        <div className="details-section">
          <h2>{product.name}</h2>

          {/* ⭐ Ratings Section */}
          <div className="ratings">
            {renderStars(product.rating)} 
            <span> ({product.reviews} reviews)</span>
          </div>

          <p className="price">{product.price}</p>

          {/* Quantity Selector */}
          <div className="quantity-controls">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart">Add to Cart</button>

          {/* Tabs Section */}
          <div className="tabs">
            <div className={`tab ${activeTab === "description" ? "active" : ""}`} onClick={() => setActiveTab("description")}>Product Description</div>
            <div className={`tab ${activeTab === "ingredients" ? "active" : ""}`} onClick={() => setActiveTab("ingredients")}>Ingredients</div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "description" ? <p>{product.description}</p> : <p>{product.ingredients}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
