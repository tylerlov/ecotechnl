import React from 'react';
import { storyblokEditable, useStoryblokState } from '@storyblok/react';

const ProductsandServicesSection = ({ blok }) => {
  blok = useStoryblokState(blok);

  // Ensure the image URL uses HTTPS protocol
  const imageUrl = blok.background_image.filename.startsWith('//') ? `https:${blok.background_image.filename}` : blok.background_image.filename;

  // Inline style for the dynamic background image
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
    <section {...storyblokEditable(blok)} className="products_and_services_section" style={dynamicStyle}>
      <div className="container">
        <h1>{blok.headline}</h1>
        <p>{blok.text_content}</p>
      </div>
    </section>
  );
};

export default ProductsandServicesSection;
