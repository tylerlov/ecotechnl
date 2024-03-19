import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const ProductsAndServicesNavBar = ({ blok }) => {
  return (
    <nav {...storyblokEditable(blok)} className="products-services-navbar" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
      <div className="logo-container" style={{ marginRight: '20px' }}>
        <a href="https://ecotechnl.ca">
          <img src={blok.ecotech_logo.filename} alt="Ecotech Logo" className="ecotech-logo" />
        </a>
      </div>
      <a href={`mailto:${blok.contact_email}`} className="contact-link-ps">Contact</a>
    </nav>
  );
};

export default ProductsAndServicesNavBar;