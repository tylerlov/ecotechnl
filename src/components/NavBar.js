import React, { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const NavBar = ({ blok }) => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <nav {...storyblokEditable(blok)} className="navbar">
      <div className="logo-container">
        <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
          <img src={blok.ecotech_logo.filename} alt="Ecotech Logo" className="ecotech-logo" />
        </a>
        <a href="https://www.powellind.com/" target="_blank" rel="noopener noreferrer">
          <img src={blok.powell_logo.filename} alt="Powell Logo" className="powell-logo" />
        </a>
      </div>
      <div className={`nav-links ${navVisible ? 'show' : ''}`}>
        {/* Use react-scroll Link for smooth scrolling */}
        <Link to="about_section" smooth={true} duration={500}>About</Link>
        <Link to="mission_section" smooth={true} duration={500} offset={-50}>Mission</Link>
        <Link to="products_and_services_section" smooth={true} duration={500}>Products and Services</Link>
        <Link to="team_section" smooth={true} duration={500} offset={-50}>Team</Link>
        <a href={`mailto:${blok.contact_email}`} className="contact-link">Contact</a>
      </div>
      {/* Burger menu icon */}
      <div className={`burger-menu ${navVisible ? 'open' : ''}`} onClick={toggleNav} style={{position: 'absolute', right: '20px', top: '20px'}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;