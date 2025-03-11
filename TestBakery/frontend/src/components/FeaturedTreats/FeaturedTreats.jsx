import React, { useEffect, useState, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductDisplay from "../productsDisplay/ProductDisplay"; // Import ProductDisplay - Tuo ProductDisplay
import "./FeaturedTreats.css";
import { CartContext } from "../context/CartContext"; // Import CartContext - Tuo CartContext

const FeaturedTreats = ({ setShowCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product - Valittu tuote -tila
  const { addToCart } = useContext(CartContext); // Use the cart context - Käytä ostoskorin kontekstia

  useEffect(() => {
    fetch("http://localhost:4000/api/products") // Fetch the products - Hae tuotteet
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error)); // Virhe tuotteiden hakemisessa
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowCart(true);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Set the selected product - Aseta valittu tuote
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null); // Close the selected product - Sulje valittu tuote
  };

  return (
    <section className="featured-section">
      <h2 className="featured-title">Top Products</h2> {/* Parhaat tuotteet */}
      <div className="featured-grid">
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails} // Pass function to view details - Välitä funktio tuotteen katseluun
          />
        ))}
      </div>
      {selectedProduct && (
        <div className="product-display-overlay">
          <ProductDisplay product={selectedProduct} onClose={handleCloseDetails} />
        </div>
      )}
    </section>
  );
};

export default FeaturedTreats;
