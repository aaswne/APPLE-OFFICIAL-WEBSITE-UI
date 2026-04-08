import React from "react";
import "./Footer.css";

const footerData = [
  {
    title: "Shop and Learn",
    links: [
      "Store","Mac","iPad","iPhone","Watch","Vision","AirPods","TV & Home","AirTag","Accessories","Gift Cards",
    ],
    subSections: [
      { title: "Apple Wallet", links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"] },
    ],
  },
  {
    title: "Account",
    links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
    subSections: [
      { title: "Entertainment", links: ["Apple One","Apple TV+","Apple Music","Apple Arcade","Apple Fitness+","Apple News+","Apple Podcasts","Apple Books","App Store"] },
    ],
  },
  {
    title: "Apple Store",
    links: ["Find a Store","Genius Bar","Today at Apple","Apple Camp","Apple Store App","Certified Refurbished","Apple Trade In","Financing","Carrier Deals at Apple","Order Status","Shopping Help"],
  },
  {
    title: "For Business",
    links: ["Apple and Business","Shop for Business"],
    subSections: [
      { title: "For Education", links: ["Apple and Education","Shop for K-12","Shop for College"] },
      { title: "For Healthcare", links: ["Apple in Healthcare","Health on Apple Watch","Health Records on iPhone"] },
      { title: "For Government", links: ["Shop for Government","Shop for Veterans and Military"] },
    ],
  },
  {
    title: "Apple Values",
    links: ["Accessibility","Education","Environment","Inclusion and Diversity","Privacy","Racial Equity and Justice","Supply Chain"],
    subSections: [
      { title: "About Apple", links: ["Newsroom","Apple Leadership","Career Opportunities","Investors","Ethics & Compliance","Events","Contact Apple"] },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* top columns */}
        <div className="footer-grid">
          {footerData.map((col) => (
            <div key={col.title} className="footer-col">
              <h4 className="footer-title">{col.title}</h4>

              <ul className="footer-list">
                {col.links?.map((t) => (
                  <li key={t}><a href="#">{t}</a></li>
                ))}
              </ul>

              {col.subSections?.map((sec) => (
                <div key={sec.title} className="footer-sub">
                  <h4 className="footer-title">{sec.title}</h4>
                  <ul className="footer-list">
                    {sec.links.map((t) => (
                      <li key={t}><a href="#">{t}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* middle line */}
        <p className="footer-note">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>

        <div className="footer-divider" />

        {/* bottom row */}
        <div className="footer-bottom">
          <div className="footer-copy">Copyright © 2026 Apple Inc. All rights reserved.</div>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="sep">|</span>
            <a href="#">Terms of Use</a>
            <span className="sep">|</span>
            <a href="#">Sales and Refunds</a>
            <span className="sep">|</span>
            <a href="#">Legal</a>
            <span className="sep">|</span>
            <a href="#">Site Map</a>
          </div>

          <div className="footer-country">United States</div>
        </div>
      </div>
    </footer>
  );
}