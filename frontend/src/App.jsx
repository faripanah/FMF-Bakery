/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Added React Router
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./products/product"; // Import Product Section
import ProductDisplay from "./products/ProductDisplay"; // ✅ Added Product Display Page
import "./App.css";

function App() {
  return (
    <Router> 
      <Navbar /> 
      <Hero />   
      
      <Routes>
        <Route path="/" element={<Product />} /> 
        <Route path="/product/:id" element={<ProductDisplay />} /> 
      </Routes>
    </Router>
  );
}

export default App;*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./products/product"; 
import ProductDisplay from "./products/ProductDisplay"; 
import Cart from "./products/Cart"; 
import "./App.css";

function App() {
  return (
    <Router> {/* ✅ Wrap everything inside Router */}
      <Navbar /> {/* Navbar at the top */}
      <Hero />   {/* Home Section */}
      
      <Routes>
        <Route path="/" element={<Product />} /> {/* Product Section (Homepage) */}
        <Route path="/product/:id" element={<ProductDisplay />} /> {/* ✅ Product Display Page */}
       
      </Routes>
    </Router>
  );
}

export default App;
