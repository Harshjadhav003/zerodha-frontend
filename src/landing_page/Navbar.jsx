import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

function Navbar() {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://docker-setup-backend-latest.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      removeCookie("token");
      navigate("/login");
      toast.success("Logged out successfully");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#ffffff" }}>
      <div className="container p-2">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">

            {/* Always visible */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            {/* Conditional rendering */}
            {!cookies.token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;