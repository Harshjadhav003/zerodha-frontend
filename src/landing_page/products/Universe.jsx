import React from "react";
import './product.css'

function Universe() {
  return (
    <section className="universe-section py-5 px-5 margin-left-right-40px">
      <div className="container text-center">

        <h2 className="universe-heading mb-3">
          The Zerodha Universe
        </h2>

        <p className="universe-subtext mb-5">
          Extend your trading and investment experience even further 
          with our partner platforms
        </p>

        {/* Row 1 */}
        <div className="row g-5 text-muted">
          <div className="col-md-4">
                    <a target="_blank" href="https://www.zerodhafundhouse.com/">
                        <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="universe-logo" />
            <p className="universe-text mt-4">
              Our asset management venture creating simple and transparent 
              index funds to help you save for your goals.
            </p>
          </a>
     
          </div>

          <div className="col-md-4">
            <a target = "_blank" href="https://sensibull.com/">
            <img src="/media/images/sensibullLogo.svg" alt="Sensibull" className="universe-logo" style={{width:'150px'}} />
            <p className="universe-text mt-4">
              Options trading platform built for retail traders to trade 
              smarter and manage risk better.
            </p>
          </a>
          </div>
           
          <div className="col-md-4">
            <a target="_blank" href="https://www.tijorifinance.com/">
            <img src="/media/images/tijori.svg" alt="Tijori" className="universe-logo" />
            <p className="universe-text mt-4">
              Investment insights platform helping you analyze businesses 
              and make informed long-term decisions.
            </p>
          </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row g-5 text-muted mt-4">
          <div className="col-md-4">
            <a target="_blank" href="https://streak.tech">
                       <img src="/media/images/streakLogo.png" alt="Streak" className="universe-logo" />
            <p className="universe-text mt-4">
              Algo trading platform that allows you to create and deploy 
              strategies without coding.
            </p>
          </a>

          </div>

          <div className="col-md-4">
            <a target="_blank" href="https://smallcase.zerodha.com">
                        <img src="/media/images/smallcaseLogo.png" alt="Smallcase" className="universe-logo" />
            <p className="universe-text mt-4">
              Invest in curated baskets of stocks built around ideas, 
              themes, and strategies.
            </p>
          </a>
          </div>

          <div className="col-md-4">
            <a target="_blank" href="https://joinditto.in/">
           
            <img src="/media/images/dittoLogo.png" alt="Ditto" className="universe-logo" />
            <p className="universe-text mt-4">
              Insurance advisory platform simplifying health and life 
              insurance decisions.
            </p>
            </a>
          </div>
        </div>

      </div>

      <button className="btn btn-primary btn-lg w-45 mx-auto d-block mt-5">sign up for free</button>
    </section>
  );
}

export default Universe;