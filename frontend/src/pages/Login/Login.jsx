import useLogin from "../../hooks/useLogin";

const Login = ({setIsAuthenticated}) => {
    const {email, setEmail, password, setPassword, handleLogin}= useLogin(setIsAuthenticated);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        handleLogin();
      };
    
      return (
        <div className="login-page">
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
              <label>Email:</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>Password:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button type="submit">Login</button>
            </form>
            <p>
              No account? <a href="/signup" className="signup-link">Create one</a>
            </p>
          </div>
        </div>
      );

}

export default Login;
