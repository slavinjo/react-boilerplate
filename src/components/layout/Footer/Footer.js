import React from 'react';

const Footer = () => (
  <footer className="mt-auto bg-footer">
    <div className="container">
      <div className="text-center py-3 mt-2">
        <div className="row">
          <div className="col-lg-2 offset-lg-1 mb-3">
            <a className="logo-h40" href="/">
              &nbsp;
            </a>
          </div>
          <div className="col-md-6 col-lg-2 text-center text-md-right text-lg-left">
            <ul className="list-unstyled m-0">
              <li>
                <a
                  className="font-weight-bold text-dark d-inline-block"
                  href="/about"
                  rel="canonical"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-weight-bold text-dark d-inline-block"
                  href="/faq"
                  rel="canonical"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="font-weight-bold text-dark d-inline-block"
                  href="/contact"
                  rel="canonical"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 text-center text-md-left">
            <ul className="list-unstyled m-0">
              <li>
                <a
                  className="font-weight-bold text-dark d-inline-block"
                  href="/glossary"
                  rel="canonical"
                >
                  Glossary
                </a>
              </li>
              <li>
                <a
                  className="font-weight-bold text-dark d-inline-block"
                  href="/privacy-policy"
                  rel="canonical"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  className="font-weight-bold text-dark d-inline-block"
                  href="/terms"
                  rel="canonical"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mt-3" style={{fontSize: '1.75rem'}}>
            <a
              className="text-dark"
              href="https://www.facebook.com/Car-Seat-Jungle-2266450793602925/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              className="text-dark mx-3"
              href="https://www.pinterest.co.uk/carseatjungle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-pinterest" />
            </a>
            <a
              className="text-dark mr-3"
              href="https://www.instagram.com/carseatjungle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="text-dark"
              href="https://twitter.com/carseatjungle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
      <small className="d-block text-center font-weight-bold text-dark pb-3">
        &copy; 2019. Car Seat Jungle. All rights reserved.
      </small>
    </div>
  </footer>
);

export default Footer;