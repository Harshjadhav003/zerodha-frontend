import React from "react";
import { Link } from "react-router-dom";
 
function Hero() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="row text-center justify-content-center">

          <div className="col-lg-8">
            <img
              src="/media/images/homeHero.png"
              alt="Hero Image"
              className="img-fluid mb-5"
            />

            <h1 className="mt-4 mb-3">Invest in everything</h1>

            <p className="fs-5 mb-4">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>

            <Link to="/signup">
              <button className="btn btn-primary btn-lg px-4">
                Sign up for free
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
