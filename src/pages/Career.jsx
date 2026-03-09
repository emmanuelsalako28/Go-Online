import React from 'react';

const Career = () => {
    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Ready to live your dream?</h1>
                            <span>Come join a team that's redefining the digital experience for millions of people in emerging markets.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="careers_jobs-container__cP0X_ mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="careers_jobs__70A3c">
                                <div className="careers_jobs-header__nOnAs d-flex mb-4">
                                    <input type="search" className="form-control mr-3" placeholder="Search role" />
                                    <button className="filled-button">Search</button>
                                </div>
                                <div className="careers_jobs-main__fIQK7">
                                    <div className="careers_jobs-table-main__y1IQK">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h2>Front End Engineer</h2>
                                                    <p><span>Tech</span></p>
                                                </div>
                                                <a href="#" className="filled-button">Apply Now</a>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h2>UI/UX Designer</h2>
                                                    <p><span>Design</span></p>
                                                </div>
                                                <a href="#" className="filled-button">Apply Now</a>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h2>Graphic Designer</h2>
                                                    <p><span>Design</span></p>
                                                </div>
                                                <a href="#" className="filled-button">Apply Now</a>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h2>Content Manager</h2>
                                                    <p><span>Marketing</span></p>
                                                </div>
                                                <a href="#" className="filled-button">Apply Now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
        </>
    );
};

export default Career;
