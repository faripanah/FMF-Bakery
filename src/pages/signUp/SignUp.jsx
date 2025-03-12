import useField from "../../hooks/useField";
import useSignup from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const name = useField("text");  
  const email = useField("email");
  const phone = useField("text");
  const address =  useField("text");
  const password = useField("password");
  const confirmPassword = useField("password");


  const { signup, error } = useSignup("/api/users/register");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signup({
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      

      
    });
    if (!error) {
      console.log("success");
      navigate("/");
    }
  };

  return (
    <div className="form-container">
    <div className="create">
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input {...name} />
        <label>Email address:</label>
        <input {...email} />
        <label>phoneNumber:</label>
        <input {...phone} />
        <label>Address:</label>
        <input {...address} />
        <label>Password:</label>
        <input {...password} />
        <label>confirmPassword:</label>
        <input {...confirmPassword} />
        
        
        <button>Sign up</button>
      </form>
      <p>Have an account? <a href="/login" className="login-link">Login</a></p>
    </div>
    </div>
  );
};

export default Signup;
