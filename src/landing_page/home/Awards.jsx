import React from 'react';

function Awards() {
  return (
    <div className="container">

      {/* ===== EcoSystem SECTION ===== */}
      <div className="row align-items-center">

        <div className="col-md-5 p-3">
          <h2 className="mb-5">Trust with confidence</h2>

          <h3>Customer-first always</h3>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h3>No spam or gimmicks</h3>
          <p>
           No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
          </p>

          <h3>The Zerodha universe</h3>
          <p>
           Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h3>Do better with money</h3>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money..
          </p>
        </div>

        <div className="col-md-7 mt-4">
          <img
            src="/media/images/ecosystem1.png"
            alt="Broker Image"
            className="img-fluid w-100"
          />
        </div>

      </div>

      {/* ===== PRESS LOGOS ===== */}
      <div className="row my-5">
        <div className="col-12 text-center">
          <img
            src="/media/images/pressLogos.png"
            alt="press"
            className="img-fluid"
          />
        </div>
      </div>




    </div>
  );
}

export default Awards;
