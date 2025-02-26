import { Link } from "react-router-dom";
import "./product.css";
import applePie from "../assets/Images/applepie.png";
import baguette from "../assets/Images/baket.png";
import bread1 from "../assets/Images/bread 1.png";

const products = [
  { id: 1, name: "Apple Pie", price: 15, image: applePie },
  { id: 2, name: "Baguette", price: 20, image: baguette },
  { id: 3, name: "Whole Grain Bread", price: 10, image: bread1 },
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} className="clickable-image" />
          </Link>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;