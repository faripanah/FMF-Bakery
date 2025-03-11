import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import useLogin from "../../hooks/useLogin";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, handleLogin } = useLogin();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const user = await handleLogin({ email, password }); // Get user data from hook
    if (user) {
      setIsAuthenticated(true); // Update authentication state
      navigate("/"); //  Redirect to homepage
    }
  };

  return (
    <div className={styles.login-page}>
      <div className={styles.login-container}>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>
          No account? <a href="/signup" className={styles.signup-link}>Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
