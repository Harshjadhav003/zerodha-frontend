import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  // Handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Toast helpers
  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    //  Validation
    if (!email || !password || !username) {
      return handleError("All fields are required");
    }

    if (password.length < 6) {
      return handleError("Password must be at least 6 characters");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { email, password, username },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        // Redirect after success
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }

    } catch (error) {
      console.error("SIGNUP ERROR:", error);
      const errorMessage = error.response?.data?.message || error.message || "Server error. Please try again.";
      handleError(errorMessage);
    }

    // Reset form
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="auth_wrapper">
      <div className="auth_card">

        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="logo"
          className="logo"
        />

        <h2>Create your account</h2>
        <p className="subtext">Start your journey with us</p>

        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email address"
              onChange={handleOnChange}
            />
          </div>

          <div className="input_group">
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleOnChange}
            />
          </div>

          <div className="input_group">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleOnChange}
            />
          </div>

          <button type="submit" className="auth_btn">
            Signup
          </button>
        </form>

        <p className="bottom_text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
