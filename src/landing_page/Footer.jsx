import React from "react";

function Footer() {
  return (
    <footer className="footer bg-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo Column */}
          <div className="col-md-3 mb-4">
            <img
              src="/media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "60%" }}
            />
            
            <p className="text-muted small mt-3">
              © 2026 Zerodha Clone <br />
              All rights reserved.
              
            </p>
            <div className="mt-3">

  {/* First Row - 4 Icons */}
  <div className="d-flex mb-2">
    <a href="#" className="social-icon me-3">
      <i className="bi bi-twitter"></i>
    </a>
    <a href="#" className="social-icon me-3">
      <i className="bi bi-facebook"></i>
    </a>
    <a href="#" className="social-icon me-3">
      <i className="bi bi-instagram"></i>
    </a>
    <a href="#" className="social-icon">
      <i className="bi bi-linkedin"></i>
    </a>
  </div>

  <hr />

  {/* Second Row - 3 Icons */}
  <div className="d-flex">
    <a href="#" className="social-icon me-3">
      <i className="bi bi-youtube"></i>
    </a>
    <a href="#" className="social-icon me-3">
      <i className="bi bi-telegram"></i>
    </a>
    <a href="#" className="social-icon">
      <i className="bi bi-whatsapp"></i>
    </a>
  </div>

</div>
  
          </div>

          {/* Account Column */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Account</h6>
            <a href="#">Open demat account</a>
            <a href="#">Minor demat account</a>
            <a href="#">NRI demat account</a>
            <a href="#">Commodity</a>
            <a href="#">Dematerialisation</a>
            <a href="#">Fund transfer</a>
            <a href="#">MTF</a>
            <a href="#">Referral program</a>
          </div>

          {/* Support Column */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <a href="#">Contact us</a>
            <a href="#">Support portal</a>
            <a href="#">How to file a complaint?</a>
            <a href="#">Status of your complaints</a>
            <a href="#">Bulletin</a>
            <a href="#">Circular</a>
            <a href="#">Z-Connect blog</a>
            <a href="#">Downloads</a>
          </div>

          {/* Company Column */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Press & media</a>
            <a href="#">Careers</a>
            <a href="#">Zerodha Cares (CSR)</a>
            <a href="#">Zerodha.tech</a>
            <a href="#">Open source</a>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Quick links</h6>
            <a href="#">Upcoming IPOs</a>
            <a href="#">Brokerage charges</a>
            <a href="#">Market holidays</a>
            <a href="#">Economic calendar</a>
            <a href="#">Calculators</a>
            <a href="#">Markets</a>
            <a href="#">Sectors</a>
          </div>

          <div className="mt-4 text-muted" style={{ fontSize: "11px", lineHeight: "1.8" }}>

          <p >Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <br />
          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
         <br />
          <a href="#" className="text-secondary text-decoration-none">  Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
          <b></b>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <br />
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>India's largest broker based on networth as per NSE a</p><a href="#"  className="text-secondary text-decoration-none"> NSE broker factsheet</a>
          <br />
          <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <a> please create a ticket here.</a></p>
          <br />
          <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
        </div>
        </div>
      </div>

      {/* Styling */}
      <style>
        {`
          .footer a {
            display: block;
            color: #666;
            text-decoration: none;
            font-size: 14px;
            margin-bottom: 8px;
            transition: 0.2s ease;
          }

          .footer a:hover {
            color: #387ed1;
          }

          .footer h6 {
            font-size: 15px;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
