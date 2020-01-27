import React from "react";

export const Footer = props => process.env.FEATURE_FOOTER ? (
  <footer className="section-container section-container--footer">
    <section className="footer-section">
      <h2 className="footer-section__title">Policy</h2>
      <p>
        orem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </section>
    <section className="footer-section">
      <h2 className="footer-section__title">Copyright</h2>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
    </section>
  </footer>
) : null;
