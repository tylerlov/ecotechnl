import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Footer = ({ blok, background_image }) => {

    const imageUrl = blok.background_image.filename.startsWith('//') ? `https:${blok.background_image.filename}` : blok.background_image.filename;

    const dynamicStyle = {
        backgroundImage: `url(${imageUrl})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh', // Adjust height as needed
        backgroundSize: 'cover', // Ensure the image covers the section and is responsive
        backgroundPosition: 'center', // Center the background image
      };
    
      return (
        <section {...storyblokEditable(blok)} className="footer" style={dynamicStyle}>
          <div className="container">
            <a href={`mailto:${blok.contact_email}`} className="contact-link">Contact Us</a>
          </div>
        </section>
      );
    };
    

export default Footer;
