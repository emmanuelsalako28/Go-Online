import React from 'react';

const About = () => {
    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>About Us</h1>
                            <span>We have over 5 years of experience in the Tech Industry</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info about-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-info-content">
                                <div className="row">
                                    <div className="col-md-6 align-self-center">
                                        <div className="right-content">
                                            <span>our solid background in website developemnt</span>
                                            <h2>Get to know about <em>our company</em></h2>
                                            <p>Welcome to Go-Online NG, where innovation meets technology. We are a premier website development
                                                company dedicated to transforming your digital presence into a powerful tool that drives success.
                                                With a passion for creativity and a commitment to excellence, we craft websites that are not only
                                                visually stunning but also highly functional and optimized for performance.
                                                <br /><br />Our team of experienced developers, designers, and strategists work closely with you to
                                                understand your unique needs and goals. Whether you're a startup looking to establish your brand or
                                                an established business aiming to enhance your online presence, we provide tailored solutions that
                                                deliver results. From sleek and responsive designs to robust e-commerce platforms, we leverage the
                                                latest technologies and best practices to create websites that stand out in a crowded digital
                                                landscape.
                                            </p>
                                            <a href="" className="filled-button">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="left-image">
                                            <img src="/src/assets/images/about-image.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Our team <em>members</em></h2>
                                <span>The creative minds behind our success</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src="/src/assets/images/emmanuel.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Emmanuel Salako</h4>
                                    <span>Co-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src="/src/assets/images/emmanuel.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Gabriel Ibironke</h4>
                                    <span>Lead Front-End Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src="/src/assets/images/emmanuel.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Aliyu Damilare</h4>
                                    <span>Graphic Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fun-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <h2>Our solutions for your <em>business growth</em></h2>
                                <p>we believe in the power of collaboration and transparency. We keep you involved at every stage of the
                                    development process, ensuring that the final product reflects your vision and meets your expectations. Our
                                    customer-centric approach means that your satisfaction is our top priority.
                                    <br /><br />With a track record of success across various industries, we are committed to helping you achieve
                                    your business objectives through innovative web solutions. Let us be your partner in growth, and together,
                                    we'll build a digital experience that captivates your audience and drives your business forward.
                                </p>
                                <a href="" className="filled-button">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">945</div>
                                        <div className="count-title">Work Hours</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">1280</div>
                                        <div className="count-title">Great Reviews</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">578</div>
                                        <div className="count-title">Projects Done</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">26</div>
                                        <div className="count-title">Awards Won</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
