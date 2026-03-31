import React from "react";

function Education() {
  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-md-6 text-center pe-md-5 mb-4 mb-md-0">
            <img
              src="/media/images/education.svg"
              alt="Varsity"
              className="img-fluid"
            />
          </div>

          {/* CONTENT */}
          <div className="col-md-6 ps-md-5">
            <h2 className="mb-3">Free and open market education</h2>

            <p className="mb-2">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>

            <a
              href="https://zerodha.com/varsity/"
              className="zerodha-link d-inline-block mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Varsity →
            </a>

            <p className="mb-2">
              TradingQ&amp;A, the most active trading and investment community in India
              for all your market related queries.
            </p>

            <a
              href="https://tradingqna.com/"
              className="zerodha-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TradingQ&amp;A →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
