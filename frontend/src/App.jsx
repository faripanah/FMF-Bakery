import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// Pages & Components
import Navbar from "./components/Navbar/NavBar";
import FindShop from "./pages/FindShop";
import Login from "./pages/Login/Login";
import SignUp from "./pages/signUp/SignUP";
import AdminPage from "./pages/AdminPage";
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.token ? true : false;
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div className="content">
          <Routes>
            {/* ✅ Add a Route for Home */}
            <Route path="/" element={<Hero />} />

            <Route  
              path="/signup" 
              element={isAuthenticated ? <Navigate to="/" /> : <SignUp setIsAuthenticated={setIsAuthenticated} />} 
            />
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/secret-dashboard"
              element={(isAuthenticated && user.role === "admin") ? <AdminPage /> : <Navigate to="/" />}
            />
             <Route path="/menu" element={<Menu />} />
            <Route path="/find-shop" element={<FindShop />} />
            <Route path="/" element={<Footer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
