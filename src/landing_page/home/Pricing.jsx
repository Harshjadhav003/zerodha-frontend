import React from "react";

function Pricing() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="row align-items-start justify-content-between">

          {/* LEFT CONTENT */}
          <div className="col-md-5 pe-md-5">
            <h2 className="mb-3">Unbeatable pricing</h2>
            <p className="mb-0">
              We pioneered the concept of discount broking and price transparency
              in India. Flat fees and no hidden charges.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-md-7">
            <div className="row text-center">

              <div className="col-4 px-4">
                <img
                  src="/media/images/pricing0.svg"
                  alt="Account opening"
                  className="img-fluid mb-3"
                />
                <p>Free account opening</p>
              </div>

              <div className="col-4 px-4">
                <img
                  src="/media/images/pricing0.svg"
                  alt="Equity pricing"
                  className="img-fluid mb-3"
                />
                <p>
                  Free equity delivery <br />
                  Intraday &amp; F&amp;O
                </p>
              </div>

              <div className="col-4 px-4">
                <img
                  src="/media/images/intradayTrades.svg"
                  alt="Mutual funds"
                  className="img-fluid mb-3"
                />
                <p>Direct mutual funds</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;
 