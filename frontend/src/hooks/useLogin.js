import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("User logged in successfully!");
        return user; // ✅ Return user data so `Login.jsx` can use it
      } else {
        const error = await response.json();
        toast.error(error.message || "Login failed!");
        return null;
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleLogin };
};

export default useLogin;

