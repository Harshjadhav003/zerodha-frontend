import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      
      <h1 className="display-4 fw-bold">404</h1>
      <p className="lead text-muted">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;