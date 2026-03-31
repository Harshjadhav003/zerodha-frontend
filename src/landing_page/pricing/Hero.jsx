import React from 'react';

function Hero() {
    return (
        <div className="hero-section text-center mt-5">
            <div className="container">

                <h1>Charges</h1>
                <p className="fs-5 text-muted">
                    List of all charges and taxes
                </p>

                <div className="row mt-5">

                    <div className="col-md-4 mt-5">
                        <img 
                            src="/media/images/pricingEquity.svg" 
                            alt="Equity Pricing" 
                            className="img-fluid"
                        />
                        <h3 className="mt-4">Free equity delivery</h3>
                        <p>
                            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                        </p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img 
                            src="/media/images/intradayTrades.svg" 
                            alt="Intraday Trades" 
                            className="img-fluid"
                        />
                        <h3 className="mt-4">Intraday and F&O trades</h3>
                        <p>
                            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>

                    <div className="col-md-4 mt-5">
                        <img 
                            src="/media/images/pricingMF.svg" 
                            alt="Mutual Funds" 
                            className="img-fluid"
                        />
                        <h3 className="mt-4">Free direct MF</h3>
                        <p>
                            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;