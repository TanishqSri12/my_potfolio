import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_socials">
            <a href="https://github.com/TanishqSri12" className="footer_social_link" target="_blank" rel="noreferrer">
                <i class="uil uil-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/tanishq-srivastava-8b1751221/" className="footer_social_link" target="_blank" rel="noreferrer">
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://x.com/Tanishq35981320" className="footer_social_link" target="_blank" rel="noreferrer">
                <i class="bx bxl-twitter"></i>
            </a>
        </div>

        <span className="footer_copy">
            &#169;Tanishq Srivastava. All rights reserved 2023
        </span>

      </div>
    </footer>
  );
}
