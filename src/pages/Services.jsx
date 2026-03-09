import React, { useState } from 'react';

const Services = () => {
    const [activeTab, setActiveTab] = useState('tabs-1');

    const handleTabClick = (tabId, e) => {
        e.preventDefault();
        setActiveTab(tabId);
    };

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Our Services</h1>
                            <span>We have over 5 years of experience</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-services">
                <div className="container">
                    <div className="row" id="tabs">
                        <div className="col-md-4">
                            <ul>
                                <li>
                                    <a href='#tabs-1' onClick={(e) => handleTabClick('tabs-1', e)} className={activeTab === 'tabs-1' ? 'active' : ''}>
                                        Custom Website Development <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#tabs-2' onClick={(e) => handleTabClick('tabs-2', e)} className={activeTab === 'tabs-2' ? 'active' : ''}>
                                        E-commerce Solutions <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#tabs-3' onClick={(e) => handleTabClick('tabs-3', e)} className={activeTab === 'tabs-3' ? 'active' : ''}>
                                        Content Management System <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#tabs-4' onClick={(e) => handleTabClick('tabs-4', e)} className={activeTab === 'tabs-4' ? 'active' : ''}>
                                        Website Maintenance & Support <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <section className='tabs-content'>
                                {activeTab === 'tabs-1' && (
                                    <article id='tabs-1'>
                                        <img src="/src/assets/images/single_service_01.jpg" alt="" />
                                        <h4>Why Choose Us?</h4>
                                        <p>
                                            We create bespoke websites tailored to your unique business needs. Our development team builds from
                                            scratch, ensuring that every aspect of your website aligns with your brand identity and goals, providing
                                            a unique and seamless user experience.
                                        </p>
                                    </article>
                                )}
                                {activeTab === 'tabs-2' && (
                                    <article id='tabs-2'>
                                        <img src="/src/assets/images/single_service_02.jpg" alt="" />
                                        <h4>E-Commerce Solutions</h4>
                                        <p>
                                            We develop robust e-commerce platforms designed to boost your online sales. From secure payment
                                            gateways to inventory management, our solutions offer everything you need to run a successful online
                                            store.
                                        </p>
                                    </article>
                                )}
                                {activeTab === 'tabs-3' && (
                                    <article id='tabs-3'>
                                        <img src="/src/assets/images/single_service_03.jpg" alt="" />
                                        <h4>Content Management Services</h4>
                                        <p>
                                            We implement powerful CMS solutions that allow you to manage your website content with ease. Whether
                                            it's WordPress, Drupal, or a custom CMS, we provide flexible and scalable systems that grow with your
                                            business.
                                        </p>
                                    </article>
                                )}
                                {activeTab === 'tabs-4' && (
                                    <article id='tabs-4'>
                                        <img src="/src/assets/images/single_service_04.jpg" alt="" />
                                        <h4>Website Maintenance & Support</h4>
                                        <p>
                                            We offer ongoing maintenance and support to ensure your website remains secure, up-to-date, and fully
                                            functional. Our team is always on hand to handle updates, troubleshoot issues, and provide technical
                                            assistance whenever you need it.
                                        </p>
                                    </article>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="callback-form callback-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Request a <em>call back</em></h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="contact-form">
                                <form id="contact" action="" method="post">
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
                                                <button type="submit" id="form-submit" className="border-button">Send Message</button>
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

export default Services;
