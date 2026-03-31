import React from 'react';
import './product.css';

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-md-7 text-center mb-4 mb-md-0">
          <img 
            src={imageURL} 
            alt={productName}
            className="img-fluid"
           
          />
        </div>

        {/* Content Section */}
        <div className="col-md-5">
          <h2 className="mb-3">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div className="d-flex flex-wrap gap-3 align-items-center mt-3">

            <a href={tryDemo} className="text-decoration-none">
              Try Demo
            </a>

            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>

            {googlePlay && (
              <a href={googlePlay}>
                <img 
                  src="/media/images/googlePlayBadge.svg" 
                  alt="Google Play" 
                  className="app-store-logo"
                  style={{ height: "40px" }}
                />
              </a>
            )}

            {appStore && (
              <a href={appStore}>
                <img 
                  src="/media/images/appstoreBadge.svg" 
                  alt="App Store" 
                  className="app-store-logo"
                  style={{ height: "40px" }}
                />
              </a>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;