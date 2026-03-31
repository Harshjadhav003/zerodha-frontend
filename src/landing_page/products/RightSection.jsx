import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left Side - Text */}
        <div className="col-md-5 p-5">
          <h1>{productName}</h1>
          <p>
            {productDescription}
            <br />
            <a href={learnMore}>Learn more</a>
          </p>
        </div>

        {/* Spacer */}
        <div className="col-md-1"></div>

        {/* Right Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;