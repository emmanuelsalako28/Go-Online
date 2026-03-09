import React, { useEffect } from 'react';
import $ from '../jquery-polyfill';

const Home = () => {
    useEffect(() => {
        // Initialize Modern Slider (Slick)
        if ($(".Modern-Slider").length && typeof $.fn.slick === 'function') {
            $(".Modern-Slider").slick({
                autoplay: true,
                autoplaySpeed: 10000,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: false,
                dots: true,
                pauseOnDotsHover: true,
                cssEase: 'linear',
                draggable: false,
                prevArrow: '<button class="PrevArrow"></button>',
                nextArrow: '<button class="NextArrow"></button>',
            });
        }

        // Initialize Testimonials (Owl Carousel)
        if ($('.owl-testimonials').length && typeof $.fn.owlCarousel === 'function') {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: { items: 1, margin: 0 },
                    460: { items: 1, margin: 0 },
                    576: { items: 2, margin: 20 },
                    992: { items: 2, margin: 30 }
                }
            });
        }

        // Counter Digits
        $('.count-digit').each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });

        return () => {
            // Cleanup carousels
            if ($(".Modern-Slider").length && typeof $.fn.slick === 'function' && $(".Modern-Slider").hasClass('slick-initialized')) {
                try {
                    $(".Modern-Slider").slick('unslick');
                } catch (e) {
                    // Ignore unslick errors
                }
            }
        };
    }, []);

    return (
        <>
            {/* Banner Starts Here */}
            <div className="main-banner header-text" id="top">
                <div className="Modern-Slider">
                    <div className="item item-1">
                        <div className="img-fill">
                            <div className="text-content">
                                <h6>we are ready to help you</h6>
                                <h4>Build your <br /> Digital Products</h4>
                                <p>Crafting personalised digital solutions to elevate your brand and business!</p>
                                <a href="/contact" className="filled-button">contact us</a>
                            </div>
                        </div>
                    </div>
                    <div className="item item-2">
                        <div className="img-fill">
                            <div className="text-content">
                                <h6>we are here to support your</h6>
                                <h4>Website <br />&amp; Design</h4>
                                <p>Welcome to the world of Website & Management, where precision meets strategy and businesses thrive!</p>
                                <a href="/services" className="filled-button">our services</a>
                            </div>
                        </div>
                    </div>
                    <div className="item item-3">
                        <div className="img-fill">
                            <div className="text-content">
                                <h6>we have a solid background</h6>
                                <h4>Digital <br />&amp; Visuliazation</h4>
                                <p>We are skilled website designers, SEO Managers, Digital Marketers, and business strategists. We work
                                    together, combining their expertise to turn vision into actionable insights, helping businesses make
                                    informed decisions and stay competitive.</p>
                                <a href="/about" className="filled-button">learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Ends Here */}

            <div className="request-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h4>Ready to live your dream?</h4>
                            <span>Come join a team that's redefining the digital experience for millions of people in emerging markets.</span>
                        </div>
                        <div className="col-md-4">
                            <a href="/career" className="border-button">Join Us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Digital <em>Marketing</em></h2>
                                <span>The Ultimate Guide To Building Credibility And Control With Digital Transformation.</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="/src/assets/images/service_01.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Website Design</h4>
                                    <p>We use the latest web development technologies and frameworks to ensure that your website is fast,
                                        secure, and user-friendly. From simple landing pages to complex web applications, we have the skills and
                                        experience to deliver high-quality web solutions that meet your needs and exceed your expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="/src/assets/images/service_02.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Graphic Design</h4>
                                    <p>Keeps businesses updated on current trends and future market directions.
                                        Assists in adapting to changes in consumer behavior and preferences.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src="/src/assets/images/service_03.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Content Management Services</h4>
                                    <p>Our Website Content Management team offers a range of services to help you manage the content on your
                                        website (Uploading content, campaigns). Whether
                                        it's WordPress, Drupal, or a custom CMS, we provide flexible and scalable experts that grow with your
                                        business.
                                    </p>
                                    <br /><br />
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
                                <p>From finding the right business growth plan to talking to a corporate specialist about your business,
                                    we’re here to support you.
                                </p>
                                <a href="" className="filled-button">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="count-area-content">
                                        <div className="count-digit">40</div>
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

            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-info-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="left-image">
                                            <img src="/src/assets/images/more-info.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 align-self-center">
                                        <div className="right-content">
                                            <span>Who we are</span>
                                            <h2>Get to know about <em>our company</em></h2>
                                            <p>Welcome to Go-Online NG, where innovation meets technology. We are a premier website development
                                                company dedicated to transforming your digital presence into a powerful tool that drives success.
                                                With a passion for creativity and a commitment to excellence, we craft websites that are not only
                                                visually stunning but also highly functional and optimized for performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>What they say <em>about us</em></h2>
                                <span>testimonials from our greatest clients</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-testimonials owl-carousel">
                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>Endurance Akponova </h4>
                                        <span>CEO Eddies Gadget</span>
                                        <p>"Navigating the website is a breeze for both me and my customers. Pages load quickly, and everything
                                            is intuitively organized, which has significantly enhanced the user experience."</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>Deborah Temitope</h4>
                                        <span>CEO Tee's Aesthetics</span>
                                        <p>"The team was extremely professional and attentive throughout the entire process. They took the time
                                            to understand my vision and delivered exactly what I was looking for"</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>Obed Idowu</h4>
                                        <span> Greenamold </span>
                                        <p>"I highly recommend Go Online to anyone looking for a professional, high-quality website. They
                                            exceeded my expectations in every way."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="callback-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Tell Us About <em>Your Project</em></h2>
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
                                                <input name="email" type="email" className="form-control" id="email" pattern="[^ @]*@[^ @]*"
                                                    placeholder="E-Mail Address" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="subject" type="number" className="form-control" id="subject" placeholder="Phone Number"
                                                    required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="subject" type="text" className="form-control" id="subject" placeholder="Company Name"
                                                    required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <select className="form-control" id="subject" name="country" defaultValue="">
                                                    <option value="" disabled>Select a country</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    {/* Add other core options or keep simple for now */}
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <select className="form-control" id="subject" name="service" defaultValue="">
                                                    <option value="" disabled>Choose a Service</option>
                                                    <option value="Website Dev">Website Development</option>
                                                    <option value="Ui/ux">UI/UX Design</option>
                                                    <option value="graphic">Graphic Design</option>
                                                    <option value="content Management">Content Management</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" className="form-control" id="message"
                                                    placeholder="Project Brief (Type here)" required=""></textarea>
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

export default Home;
