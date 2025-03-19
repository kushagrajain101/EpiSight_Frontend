import React, { useState } from "react";
import axios from "axios";


const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordScore, setPasswordScore] = useState(0);
  const [serverResponse, setServerResponse] = useState({ message: "", isError: false });
  
  const signupUrl = `${process.env.REACT_APP_API}/signup`;
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === "password") {
      const strength = checkPasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const checkPasswordStrength = (password) => {
    const criteria = {
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[\W_]/.test(password),
      length: password.length >= 8
    };
    
    const score = Object.values(criteria).filter(Boolean).length * 20;
    setPasswordScore(score);
    
    if (score >= 80) return "Strong";
    if (score >= 60) return "Medium";
    return "Weak";
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim() || formData.username.length < 5)
      newErrors.username = "Username must be at least 5 characters";
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    
    const password = formData.password;
    if (password.length < 8) 
      newErrors.password = "Password must be at least 8 characters";
    else if (!/[A-Z]/.test(password))
      newErrors.password = "Password must contain an uppercase letter";
    else if (!/[a-z]/.test(password))
      newErrors.password = "Password must contain a lowercase letter";
    else if (!/\d/.test(password))
      newErrors.password = "Password must contain a number";
    else if (!/[\W_]/.test(password))
      newErrors.password = "Password must contain a special character";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(signupUrl, formData);
      setServerResponse({ message: response.data.message, isError: false });
      setFormData({ username: "", email: "", password: "" });
      setPasswordStrength("");
      setPasswordScore(0);
    } catch (error) {
      console.error("Signup error:", error);
      setServerResponse({
        message: error.response?.data?.message || "Sign up failed",
        isError: true
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-500 p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6 text-center">
          Create an Account
        </h2>
        
        {serverResponse.message && (
          <div className={`p-3 mb-4 rounded-lg ${serverResponse.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {serverResponse.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${errors.username ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
              placeholder="Enter username (min 5 characters)"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
              placeholder="Password (8+ chars with A-Z, a-z, 0-9, special)"
            />
            
            {formData.password && (
              <div className="mt-2">
                <p className="text-sm">
                  Password Strength:{" "}
                  <span className={`font-bold ${
                    passwordStrength === "Weak" ? "text-red-500" : 
                    passwordStrength === "Medium" ? "text-yellow-500" : "text-green-500"
                  }`}>
                    {passwordStrength}
                  </span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div
                    className={`h-full rounded-full ${
                      passwordScore < 40 ? "bg-red-500" : 
                      passwordScore < 80 ? "bg-yellow-500" : "bg-green-500"
                    }`}
                    style={{ width: `${passwordScore}%` }}
                  ></div>
                </div>
                <ul className="text-xs text-gray-600 mt-2 space-y-1">
                  <li className={formData.password.length >= 8 ? "text-green-600" : ""}>At least 8 characters</li>
                  <li className={/[A-Z]/.test(formData.password) ? "text-green-600" : ""}>One uppercase letter</li>
                  <li className={/[a-z]/.test(formData.password) ? "text-green-600" : ""}>One lowercase letter</li>
                  <li className={/\d/.test(formData.password) ? "text-green-600" : ""}>One number</li>
                  <li className={/[\W_]/.test(formData.password) ? "text-green-600" : ""}>One special character</li>
                </ul>
              </div>
            )}
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;