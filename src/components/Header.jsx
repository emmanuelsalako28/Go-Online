import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <ul className="left-info">
                <li><a href="#"><i className="fa fa-clock-o"></i>Mon - Sat 08:00am -8:00pm</a></li>
                <li><a href="#"><i className="fa fa-phone"></i>+2347081150770</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="right-icons">
                <li><a href="https://www.facebook.com/profile.php?id=61564409691232"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://x.com/goonline_ng"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h2>Go-Online NG</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/services">Our Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/contact">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/career">Careers</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/one-page">One Page</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
