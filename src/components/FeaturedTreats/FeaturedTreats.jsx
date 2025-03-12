import { useContext, useState } from "react"; 
import { CartContext } from "../context/CartContext"; 
import "./FeaturedTreats.css";

// ✅ Import Images
import cake4 from "../../assets/Images/cakes/cake4.png";
import cake5 from "../../assets/Images/cakes/cake5.png";
import butterMilkCake from "../../assets/Images/cakes/butter-milk-cake.png";
import fruitCake from "../../assets/Images/cakes/fruit-cake.png";
import chocolateTart from "../../assets/Images/tarts/chocolate-tart.avif";
import strawberryTart from "../../assets/Images/tarts/strawberry-tart.avif";

// ✅ Define Treats Data
const treats = [
  { id: 1, name: " choco cake", price: 14, image: cake4 },
  { id: 2, name: "Chocolate cake", price: 16, image: cake5 },
  { id: 3, name: "Buttermilk Cake", price: 14, image: butterMilkCake },
  { id: 4, name: "Fruit Cake", price: 16, image: fruitCake },
  { id: 5, name: "Chocolate Tart", price: 10, image: chocolateTart },
  { id: 6, name: "Strawberry Tart", price: 12, image: strawberryTart },
];

const FeaturedTreats = () => {
  const { addToCart } = useContext(CartContext); // 🛒 Get addToCart function
  const [selectedTreat, setSelectedTreat] = useState(null);

  // ✅ Handle treat selection
  const handleSelectTreat = (id) => {
    setSelectedTreat(id === selectedTreat ? null : id); // Toggle selection
  };

  return (
    <div className="featured-treats">
      <h2>Featured Treats</h2>
      <div className="treats-container">
        {treats.map((treat) => (
          <div 
            className={`treat-card ${selectedTreat === treat.id ? "selected" : ""}`} 
            key={treat.id} 
            onClick={() => handleSelectTreat(treat.id)}
          >
            <img src={treat.image} alt={treat.name} />
            <h3>{treat.name}</h3>
            <p>€{treat.price.toFixed(2)}</p>

            
            {selectedTreat === treat.id && (
              <button 
                className="add-to-cart-btn" 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering parent div click
                  addToCart({ ...treat, quantity: 1 }); // Add item with default quantity
                }}
              >
                Add to Cart 
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTreats;
