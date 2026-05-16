import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//  Global axios config (cookies)
axios.defaults.withCredentials = true;

function Signup() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [loading, setLoading] = useState(false);

  const { email, password, username } = inputValue;

  // Handle input
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Toasts
  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      return handleError("All fields are required");
    }

    if (password.length < 6) {
      return handleError("Password must be at least 6 characters");
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        { email, password, username }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        //  save token to localStorage
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Reset only on success
        setInputValue({
          email: "",
          password: "",
          username: "",
        });

        // Redirect to login
        setTimeout(() => {
          navigate("/");
        }, 800);
      } else {
        handleError(message);
      }

    } catch (error) {
      console.error("SIGNUP ERROR:", error);
      handleError(
        error.response?.data?.message || "Server error"
      );
    } finally {
      setLoading(false);
    }
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

          <button
            type="submit"
            className="auth_btn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Signup"}
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