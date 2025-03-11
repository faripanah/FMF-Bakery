import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// pages & components
import Navbar from "./components/Navbar/NavBar";

//import EditJobPage from "./pages/EditJobPage";
//import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/signUp/SignUP";
import AdminPage from "./pages/AdminPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.token ? true : false;
  });
  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs/:id" element={<JobPage isAuthenticated={isAuthenticated} />} />
            <Route
              path="/jobs/add-job"
              element={isAuthenticated ? <AddJobPage /> : <Navigate to="/signup" />}
            />           
            <Route
              path="/edit-job/:id"
              element={isAuthenticated ? <EditJobPage /> : <Navigate to="/signup" />}
            />
           <Route  
              path="/signup" 
              element={isAuthenticated ? <Navigate to="/" /> : <SignUp setIsAuthenticated={setIsAuthenticated} />} 

            />
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            <Route
              path="/secret-dashboard"
              element={
               (isAuthenticated && user.role === "admin")  ? 
                  <AdminPage />: <Navigate to="/" />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;