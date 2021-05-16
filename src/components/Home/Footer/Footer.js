import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className="mt-4 pt-4">
            <section id="footer" class="footer">
                <div class="footerBg"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="contact-form btm-brdr">
                                <div class="form-Box">
                                    <input type="text" placeholder="Name" class="b_effect" />
                                </div>
                                <div class="form-Box">
                                    <input type="text" placeholder="Email" class="b_effect" />
                                </div>
                                <div class="form-Box">
                                    <textarea placeholder="Message" class="b_effect"></textarea>
                                </div>
                                <div class="form-Box">
                                    <input type="submit" value="Submit" class="fill-btn" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="contact-address btm-brdr">
                                <h4 class="fTitle"> Contact <span>Us</span> </h4>
                                <ul>
                                    <li> <i class="fa fa-phone" aria-hidden="true"></i> <span>1800 999 87 21</span> </li>
                                    <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <span>121 Abc St, Delhi VIC 5000, India</span> </li>
                                    <li><i class="fa fa-envelope-o" aria-hidden="true"></i><span>info@scanfcode.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="subscribe btm-brdr">
                                <h4 class="fTitle"> Subscribe <span>Newsletter</span> </h4>
                                <form>
                                    <input type="text" placeholder="Example@example.com" />                                <button type="button" class="fill-btn">Subscribe</button>
                                </form>
                            </div>
                            {/* social icons */}
                            <div class="social-icons">
                                <h4 class="fTitle"> Social <span>News</span> </h4>
                                <ul>
                                    <li>
                                        <a href="'#" target="_blank">  <FontAwesomeIcon icon={faFacebook} /> </a></li>
                                    <li> <a href="'#" target="_blank">  <FontAwesomeIcon icon={faTwitter} /> </a></li>
                                    <li><a href="'#" target="_blank">  <FontAwesomeIcon icon={faYoutube} /></a></li>
                                    <li><a href="'#" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="copyright" class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h6> © 2017 This theme is powered by <a href="http://scanfcode.com" target="_blank">Scanfcode.</a> </h6>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Footer;