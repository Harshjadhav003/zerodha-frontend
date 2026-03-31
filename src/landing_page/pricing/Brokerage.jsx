import React from 'react';
import './brokerage.css';

function Brokerage() {
    return (
        <div className="brokerage-section py-5">

 <h2 className="mt-5 mb-4 p-4">Charges for account opening</h2>

<div className="charges-card p-5">
  <table className="charges-table">
    <thead>
      <tr>
        <th>Type of account</th>
        <th>Charges</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Online account</td>
        <td><span className="free-badge">Free</span></td>
      </tr>
      <tr>
        <td>Offline account</td>
        <td><span className="free-badge">Free</span></td>
      </tr>
      <tr>
        <td>NRI account (offline only)</td>
        <td>₹ 500</td>
      </tr>
      <tr>
        <td>Partnership, LLP, HUF, or Corporate accounts</td>
        <td>₹ 500</td>
      </tr>
    </tbody>
  </table>
</div>
<h2 className="mt-5  p-4">
  Demat AMC (Annual Maintenance Charge)
</h2>

<div className="charges-card p-5">
  <table className="charges-table">
    <thead>
      <tr>
        <th>Value of holdings</th>
        <th>AMC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Up to ₹4 lakh</td>
        <td><span className="free-badge">Free</span></td>
      </tr>
      <tr>
        <td>₹4 lakh - ₹10 lakh</td>
        <td>₹100 per year, charged quarterly*</td>
      </tr>
      <tr>
        <td>Above ₹10 lakh</td>
        <td>₹300 per year, charged quarterly</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-muted small mt-3">
  * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
  BSDA account holders cannot hold more than one demat account.
</p>

            <div className="container ">
                <h1 className="mb-5">Charges explained</h1>

                <div className="row">
                    <div className="col-md-6 text-muted">

                        <h3>Securities/Commodities transaction tax</h3>
                        <p>
                            Tax by the government when transacting on the exchanges. 
                            Charged as above on both buy and sell sides when trading equity delivery. 
                            Charged only on selling side when trading intraday or on F&O.
                        </p>
                        <p>
                            When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. 
                            Important to keep a tab.
                        </p>

                        <h3 className="mt-4">Transaction/Turnover Charges</h3>
                        <p>
                            Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. 
                            (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                        </p>
                        <p>
                            BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                        </p>
                        <p>
                            BSE has revised transaction charges for group A, B and other non exclusive scrips 
                            (non-exclusive scrips from group E, F, FC, G, GC, W, T) 
                            at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
                        </p>
                        <p>
                            BSE has revised transaction charges in M, MT, TS and MS groups 
                            to ₹275 per crore of gross turnover.
                        </p>

                        <h3 className="mt-4">Call & trade</h3>
                        <p>
                            Additional charges of ₹50 per order for orders placed through a dealer 
                            at Zerodha including auto square off orders.
                        </p>

                        <h3 className="mt-4">Stamp charges</h3>
                        <p>
                            Stamp charges by the Government of India as per the Indian Stamp Act of 1899 
                            for transacting in instruments on the stock exchanges and depositories.
                        </p>

                        <h3 className="mt-4">NRI brokerage charges</h3>
                        <ul>
                            <li>
                                For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).
                            </li>
                            <li>
                                For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                            </li>
                            <li>
                                ₹500 + GST as yearly account maintenance charges (AMC) charges.
                            </li>
                        </ul>

                        <h3 className="mt-4">Account with debit balance</h3>
                        <p>
                            If the account is in debit balance, any order placed will be charged ₹40 per executed order 
                            instead of ₹20 per executed order.
                        </p>

                        <h3 className="mt-4">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h3>
                        <ul>
                            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        </ul>

                        <h3 className="mt-4">Margin Trading Facility (MTF)</h3>
                        <ul>
                            <li>
                                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. 
                                The interest is applied from T+1 day until the day MTF stocks are sold.
                            </li>
                            <li>
                                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
                            </li>
                            <li>
                                MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.
                            </li>
                        </ul>

                    </div>
                     <div className="col-md-6 text-muted">
                        <h3>GST</h3>
                        <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                        <h3>SEBI Charges</h3>
                        <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                        <h3>DP (Depository participant) charges</h3>
                        <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                        <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                        <h3>Pledging charges</h3>
                        <p>₹30 + GST per pledge request per ISIN.</p>
                        <h3>AMC (Account maintenance charges)</h3>
                        <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA</p>
                        <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC</p>
                        <h3>Corporate action order charges</h3>
                        <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                        <h3>Off-market transfer charges</h3>
                        <p>₹25 per transaction.</p>
                        <h3>Physical CMR request</h3>
                        <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                        <h3>Payment gateway charges</h3>
                        <p>₹9 + GST (Not levied on transfers done via UPI)</p>
                        <h3>Delayed Payment Charges</h3>
                        <p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.</p>
                        <h3>Trading using 3-in-1 account with block functionality</h3>
                        <ul>
                            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                            <li>Intraday Brokerage: 0.05% per executed order.</li>
                        </ul>


                    



                     </div>
                </div><br />
                <div className='text-muted '>
                    <h4>Disclaimer</h4><br />
                    <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                </div>

            </div>
        </div>
    );
}

export default Brokerage;