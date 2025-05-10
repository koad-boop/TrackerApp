import { useState } from "react";
import {v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { signUpStorage, getSignUpStorage } from "../utils/localStorage";
import "../App.css";
import "../css/SignupForm.css"; 

export const SignupFormPage = () => {
  const signupNavigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    mobileNumber: "",
    password: "",
    skill: [],
    photo: "", // added photo field
    streak: 0, // added streak
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const skills = prev.skill;
      return {
        ...prev,
        skill: checked
          ? [...skills, value]
          : skills.filter((s) => s !== value),
      };
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photo: reader.result, // save photo as base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newUserData = {
      ...formData,
      id:uuidv4(),
      streak: 0, // initial streak
      tasks: [], // initial tasks (can be added later)
      photo: formData.photo, // user's profile photo
    };
  
    // Store user data under the user's unique key (e.g., using userName)
    const existingData = getSignUpStorage("users") || [];
    const newSignupData = [...existingData, newUserData];
    signUpStorage("users", newSignupData);
    
    // Optionally, you can store this user data under their userName in localStorage:
    // localStorage.setItem(newUserData.userName, JSON.stringify(newUserData));
  
    // Reset form data and navigate to login
    setFormData({
      userName: "",
      mobileNumber: "",
      password: "",
      skill: [],
    });
    signupNavigate("/LoginForm");
  };
  

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Create Account</h1>

        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          value={formData.userName}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="skills">
          <label>Select Skills:</label>
          <div className="skills-options">
            {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
              <label key={skill} className="skill-option">
                <input
                  type="checkbox"
                  value={skill}
                  checked={formData.skill.includes(skill)}
                  onChange={handleSkillChange}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        <div className="photo-upload">
          <label>Upload Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};
