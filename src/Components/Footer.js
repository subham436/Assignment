import React from "react";
import "./Styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {/* First Container */}
      <div className="content-container">
        <strong className="subscribe-content">Subscribe Our Newsletter For More Updates</strong>
        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      {/* Second Container */}
      <div className="subscribe-container">
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
}
