import { useState } from "react";
import styles from "./signUp.module.css";
import useSignup from "../../hooks/useSignup";
import { Link, useNavigate } from "react-router-dom";


function SignUp({ setIsAuthenticated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { handleSignup } = useSignup();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    await handleSignup({ 
      name, email, address, phone, password, confirmPassword, setIsAuthenticated 
    });

    navigate("/"); // t after signup
  };

  return (
    <div className={styles.signup-container}>
      <div className={styles.signup-form}>
        <h2>Personal Info</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Full Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

          <label>Phone Number:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
        <p>
          Have an account? 
          <Link to="/login" className={styles.loginLink}> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
