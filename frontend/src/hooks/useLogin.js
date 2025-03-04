import {useState} from "react";
import {useNavigate} from "react-router-dom";

const useLogin = (setIsAuthenticated) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    "Content-Type": "aplication/json",
                },
               
            });
            if(response.ok) {
                const user = await response.json();
                localStorage.setItem("user", JSON.stringify(user));
                console.log("User Logged in successfully!");
                setIsAuthenticated(true);
                navigate("/");
             
            }else{
                console.log("Login failed!");
            }

        } catch (error) {
            console.error("Error during login:", error);
            
        }

    };
    return {email, setEmail, password, setPassword, handleLogin};
};
export default useLogin;
