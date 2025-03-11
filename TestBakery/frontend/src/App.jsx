import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Navbar from './components/navBar/Navbar';

// Pages
import SignUp from "./pages/signUp/SignUp";
import LogIn from "./pages/login/LogIn";
import "./App.css";
import Home from "./pages/home/HomePage";

// Importar CartProvider
import { CartProvider } from './components/context/CartContext'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <BrowserRouter>
      {/* Envolver todo con CartProvider */}
      <CartProvider>
        <Navbar />
        <div className="home">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;