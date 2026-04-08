import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  //  state
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  // handle input
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // toast
  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const { data } = await axios.post(
       "http://localhost:3002/login",
        { email, password },
        { withCredentials: true }
      );

      const { success, message } = data;

     if (success) {
  handleSuccess(message);

  setTimeout(() => {
    window.location.href = "http://localhost:5174"; // dashboard
  }, 1000);
} else {
  handleError(message);
}

    } catch (error) {
      console.error(error);
      handleError(
        error.response?.data?.message || "Server error"
      );
    }

    setInputValue({
      email: "",
      password: "",
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

        <h2>Login to your account</h2>
        <p className="subtext">Welcome back 👋</p>

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

          <div className="input_group password_group">
            <input
              type={show ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleOnChange}
            />
            <span
              className="eye_icon"
              onClick={() => setShow(!show)}
            >
              {show ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" className="auth_btn">
            Login
          </button>
        </form>

        <p className="bottom_text">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;