import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // install with: npm install axios
import "../css/Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    username: "",
    securityQuestion: "",
    customQuestion: "",
    securityAnswer: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.dob ||
      !formData.email ||
      !formData.phone ||
      !formData.username ||
      !formData.securityQuestion ||
      (formData.securityQuestion === "custom" && !formData.customQuestion) ||
      !formData.securityAnswer ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error(" Passwords do not match!");
      return;
    }

    try {
      // if custom question is chosen, replace securityQuestion with customQuestion
      const finalData = {
        ...formData,
        securityQuestion:
          formData.securityQuestion === "custom"
            ? formData.customQuestion
            : formData.securityQuestion,
      };

      const response = await axios.post(
        "http://localhost:8080/api/register",
        finalData
      );

      console.log(response);
      if (response.status === 200) {
      toast.success("✅ Registration successful!");
      }else{
        toast.error("Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed!");
    }
  };

  console.log("Selected Security Question:", formData.securityQuestion);

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            className="register-input"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            className="register-input"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          {/* Date of Birth */}
          <input
            type="date"
            name="dob"
            className="register-input"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            className="register-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Phone Number */}
          <input
            type="number"
            name="phone"
            placeholder="Phone Number *"
            className="register-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username *"
            className="register-input"
            value={formData.username}
            onChange={handleChange}
            required
          />

          {/* Security Question */}
          <select
            name="securityQuestion"
            className="register-input select"
            value={formData.securityQuestion}
            onChange={handleChange}
            required
          >
            <option value="">Select a Security Question *</option>
            <option value="pet">What is your first pet’s name?</option>
            <option value="school">What is your first school’s name?</option>
            <option value="city">In which city were you born?</option>
            <option value="movie">What is your favorite movie?</option>
            <option value="custom">Custom Question</option>
          </select>

          {/* Custom Question Input */}
          {formData.securityQuestion === "custom" && (
            <input
              type="text"
              name="customQuestion"
              placeholder="Enter your custom question *"
              className="register-input"
              value={formData.customQuestion}
              onChange={handleChange}
              required
            />
          )}

          {/* Security Answer */}
          <input
            type="text"
            name="securityAnswer"
            placeholder="Enter your answer *"
            className="register-input"
            value={formData.securityAnswer}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password *"
            className="register-input"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password *"
            className="register-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="login-redirect">
          Already have an account? <a href="/login">Login here</a>
        </p>

        {/* Toast Notifications */}
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}
