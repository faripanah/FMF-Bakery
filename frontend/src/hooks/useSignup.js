//manage state(email, password,...)
//handles the signup request and saves the users to localstorage
//Navigate the user to homepage or different page after successful signup

import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async ({ name, email, address, phone, password, confirmPassword, setIsAuthenticated }) => {
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, address, phone, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true); // updates the authentication state
        toast.success("User signed up successfully!");
      } else {
        const error = await response.json();
        toast.error(error.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSignup };
};

export default useSignup;
