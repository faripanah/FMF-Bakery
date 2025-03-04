//manage state(email, password,...)
//handles the signup request and saves the users to localstorage
//Navigate the user to homepage or different page after successful signup

import { useState } from "react";
import {useNavigate} from "react-router-dom";

const useSignup = function (setIsAuthenticated){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConformPassword] = useState("");
    const navigate = useNavigate();


    const handleSignup = async () => {
        try {
            const response = await fetch("/api/user/signup", {
                method: "POST",
                body: JSON.stringify({name, email, address, phone, password, confirmPassword}), //send uservdata to API
                headers: {
                    "Content-Type": "application/json",
                },

            });
            if(response.ok) {
                const user = await response.json(); //converts the API response which is json format to js object
                localStorage.setItem("user", JSON.stringify(user));
                console.log("User signeg up successfully!!");
                setIsAuthenticated(true);
                navigate("/");

            }else {
                console.log("Signup failed");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            
        }
    };

    return {
        name, email, address, phone, password, confirmPassword, handleSignup,
    };

};
export default useSignup;