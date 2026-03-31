import React from "react";
import CategoryCard from "./CategoryCard";
import {
  FaCircleUser,
  FaUser,
  FaChartLine,
  FaWallet,
  FaDesktop,
  FaCoins
} from "react-icons/fa6";
import "./support.css";

function CreateTicket() {
  return (
    <div className="create-ticket-section py-5">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-8 mb-4">
            <h4 className="mb-4">Create a ticket</h4>

            <section className="support-categories">
              <CategoryCard icon={<FaCircleUser />} title="Account Opening" />
              <CategoryCard icon={<FaUser />} title="Your Zerodha Account" />
              <CategoryCard icon={<FaChartLine />} title="Kite" />
              <CategoryCard icon={<FaWallet />} title="Funds" />
              <CategoryCard icon={<FaDesktop />} title="Console" />
              <CategoryCard icon={<FaCoins />} title="Coin" />
            </section>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">
            <div className="support-sidebar">
              <h6 className="mb-3">Announcements</h6>
              <p className="small">
                Settlement Holiday on account of Chhatrapati Shivaji Maharaj Jayanti on February 19, 2026
              </p>
              <p className="small">
                Surveillance measure on scrips - February 2026
              </p>

              <h6 className="mt-4 mb-3">Quick links</h6>
              <ul className="list-unstyled small">
                <li><a href="#">Track account opening</a></li>
                <li><a href="#">Track segment activation</a></li>
                <li><a href="#">Intraday margins</a></li>
                <li><a href="#">Kite user manual</a></li>
                <li><a href="#">Learn how to create a ticket</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreateTicket;