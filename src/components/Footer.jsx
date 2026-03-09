import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer-item">
                            <h4>Go Online NG</h4>
                            <ul className="social-icons">
                                <li><a rel="nofollow" href="https://web.facebook.com/profile.php?id=61564409691232&sk=about" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item">
                            <h4>Useful Links</h4>
                            <ul className="menu-list">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">How We Work</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/career">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item">
                            <h4>Additional Pages</h4>
                            <ul className="menu-list">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">How We Work</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/career">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item last-item">
                            <h4>Contact Us</h4>
                            <div className="contact-form">
                                <form id="contact footer-contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Copyright &copy; 2024 Go_Online NG.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
