import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "./../e-school-resources-master/ICON/Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <div>
      <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                <a href="index.html" className="footer-logo">
                  <img src={Img} alt="footer_logo" className="img-fluid" />
                </a>
                <p className="footer-info-text ptext">
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator.
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="/" style={{ marginRight: "8px" }}>
                        <FacebookIcon fontSize="medium" />
                      </a>
                    </li>
                    <li>
                      <a href="/" style={{ marginRight: "8px" }}>
                        <TwitterIcon fontSize="medium" />
                      </a>
                    </li>

                    <li>
                      <a href="/" style={{ marginRight: "8px" }}>
                        <LinkedInIcon fontSize="medium" />
                      </a>
                    </li>
                    <li>
                      <a href="/" style={{ marginRight: "8px" }}>
                        <InstagramIcon fontSize="medium" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" aria-hidden="true"></i>
                    </div>

                    <div className="contact-info">
                      <h3>Jaipur India</h3>
                      <p className="ptext">5353 Road Avenue</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="contact-info">
                      <h3>95 711 9 5353</h3>
                      <p className="ptext">Give us a call</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black"></span>
                    </div>
                    <ul>
                      <li>
                        <a href="/">About us</a>
                      </li>
                      <li>
                        <a href="/">Services</a>
                      </li>
                      <li>
                        <a href="/">Projects</a>
                      </li>
                      <li>
                        <a href="/">Our Team</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/">Contact us</a>
                      </li>
                      <li>
                        <a href="/">Blog</a>
                      </li>
                      <li>
                        <a href="/">Testimonials</a>
                      </li>
                      <li>
                        <a href="/">Faq</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3>Subscribe</h3>
                      <span className="animate-border border-black"></span>
                    </div>
                    <p className="ptext">
                      Don't miss to subscribe to our new feeds, kindly fill the
                      form below.Reference site about Lorem Ipsum, giving
                      information on its origins, as well.
                    </p>
                    <form action="/">
                      <div className="form-row">
                        <div className="col dk-footer-form">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
style={{color:"white"}}
                          />
                          <button type="submit">
                            <SendIcon />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>Copyright © 2019, All Right Reserved Seobin</span>
              </div>

              <div className="col-md-6">
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Terms</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="back-to-top" className="back-to-top">
          <button className="btn btn-dark" title="Back to Top">
            <i className="fa fa-angle-up"></i>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
