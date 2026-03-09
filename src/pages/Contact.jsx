import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Contact Us</h1>
                            <span>feel free to send us a message now!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-information">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-phone"></i>
                                <h4>Phone</h4>
                                <p>Contact Us On </p>
                                <a href="tel:+2347081150770">+234 708 115 0770</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-envelope"></i>
                                <h4>Email</h4>
                                <p>Send us an email on </p>
                                <a href="mailto:goonlinemedia0@gmail.com">goonlinemedia0@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-map-marker"></i>
                                <h4>Location</h4>
                                <p>Lagos, NG</p>
                                <a href="https://maps.app.goo.gl/..." target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="callback-form contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Send us a <em>message</em></h2>
                                <span>We'd love to hear from you.</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="contact-form">
                                <form id="contact" action="" method="get">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*"
                                                    placeholder="E-Mail Address" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject"
                                                    required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message"
                                                    required=""></textarea>
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
            </div>

            <div id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1039973761735!2d3.374061173504139!3d6.508518523340357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5ed5a49bd3%3A0x3ef4366a93b93961!2sMcneil%20Rd%2C%20Sabo%20yaba%2C%20Yaba%2FIgbobi%20101245%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1724251319297!5m2!1sen!2suk"
                    width="100%" height="500px" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
        </>
    );
};

export default Contact;
