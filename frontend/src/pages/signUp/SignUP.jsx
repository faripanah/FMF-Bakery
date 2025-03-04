import useSignup from "../../hooks/useSignup";

const SignUp = ({setIsAuthenticated}) => {
  const {name, setName, email, setEmail, address, setAddress,
        phone, setPhone, password,
        setPassword, confirmPassword, setConfirmPassword, handleSignup} = useSignup(setIsAuthenticated);

        return (
          <div>
            <div className="signup-container">
                  <div className="signup-form">
                      <h2>Personal Info</h2>
                      <form onSubmit={handleFormSubmit}>
                          <label>Full Name:</label>
                          <input 
                              type="text" 
                              className="input-field"
                              value={name} 
                              onChange={(e) => setName(e.target.value)} 
                          />
                           <label>Email:</label>
                          <input 
                              type="email" 
                              className="input-field"
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)} 
                          />
                           <label>Address:</label>
                          <input 
                              type="text" 
                              className="input-field"
                              value={address} 
                              onChange={(e) => setAddress(e.target.value)} 
                          />
      
                          <label>Phone Number:</label>
                          <input 
                              type="text" 
                              className="input-field"
                              value={phone} 
                              onChange={(e) => setPhone(e.target.value)} 
                          />
                          
                          <label>Password:</label>
                          <input 
                              type="password" 
                              className="input-field"
                              value={password} 
                              onChange={(e) => setPassword(e.target.value)} 
                          />
      
                          <label>Confirm Password:</label>
                          <input 
                              type="password" 
                              className="input-field"
                              value={confirmPassword} 
                              onChange={(e) => setConfirmPassword(e.target.value)} 
                          />
      
                          <button type="submit" className="submit-btn">Submit</button>
                      </form>
                      <p>Have an account? <a href="/login" className="login-link">Login</a></p>
                  </div>
              </div>
          </div>
        )
      }
      
      export default SignUp