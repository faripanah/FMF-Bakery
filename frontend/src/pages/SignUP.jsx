import { useState } from "react";

function SignUp() {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        password: "",
        confirmPassword: "",
    })
  return (
    <div>SignUp</div>
  )
}

export default SignUp