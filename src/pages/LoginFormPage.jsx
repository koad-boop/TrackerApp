import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getSignUpStorage } from "../utils/localStorage";
import { AuthContext } from "../context/AuthContext"; // ✅
import "../App.css";
import "../css/LoginForm.css"; 

export const LoginFormPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅

  const [lFormData, setLFormData] = useState({
    lUserName: "",
    lPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allUsers = getSignUpStorage("users") || [];
    const matchedUser = allUsers.find(
      (user) =>
        user.userName === lFormData.lUserName &&
        user.password === lFormData.lPassword
    );

    if (matchedUser) {
      
      
      login(matchedUser); // ✅ Update global context

      setLFormData({ lUserName: "", lPassword: "" });
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Please try again!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Log In</h1>

        <input
          type="text"
          name="lUserName"
          placeholder="Your Name"
          value={lFormData.lUserName}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="lPassword"
          placeholder="Password"
          value={lFormData.lPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Log In</button>
      </form>
    </div>
  );
};
