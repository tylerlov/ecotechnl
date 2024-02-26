import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const NavBar = ({ blok }) => {
  return (
    <nav {...storyblokEditable(blok)} className="navbar">
      <div className="logo-container">
        <img src={blok.ecotech_logo.filename} alt="Ecotech Logo" className="ecotech-logo" />
        <a href="https://www.powellind.com/" target="_blank" rel="noopener noreferrer">
          <img src={blok.powell_logo.filename} alt="Powell Logo" className="powell-logo" />
        </a>
      </div>
      <div className="nav-links">
        {/* Use react-scroll Link for smooth scrolling */}
        <Link to="about_section" smooth={true} duration={500}>About</Link>
        <Link to="mission_section" smooth={true} duration={500}>Mission</Link>
        <Link to="products_and_services_section" smooth={true} duration={500}>Products and Services</Link>
        <Link to="team_section" smooth={true} duration={500}>Team</Link>
      </div>
      <div className="contact-button">
        <a href="mailto:contact@example.com">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;