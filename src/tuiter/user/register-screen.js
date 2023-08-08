import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { register } from "../services/auth-thunks";

function RegisterScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const handleRegister = async () => {
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  try {
    const resultAction =await dispatch(register({username, password}));
    if (register.rejected.match(resultAction)) {
      throw new Error('Registration failed');
    }
    navigate("/tuiter/profile");
  } catch (e) {
    alert('Username already exists');
  }
}

 return (
    <div>
     <h1>Register Screen</h1>
     <div className="mt-2">
      <label>Username</label>
      <input className="form-control" type="text" value={username}
       onChange={(event) => setUsername(event.target.value)}/>
     </div>
     <div className="mt-2">
       <label>Password</label>
       <input className="form-control" type="password" value={password}
         onChange={(event) => setPassword(event.target.value)}/>
     </div>
     <div className="mt-2">
       <label>Confirm Password</label>
       <input className="form-control" type="password" value={confirmPassword}
         onChange={(event) => setConfirmPassword(event.target.value)}/>
     </div>
     <button className="btn btn-primary mt-2"
             onClick={handleRegister}>
       Register
     </button>
    </div>
   );
  
}

export default RegisterScreen;