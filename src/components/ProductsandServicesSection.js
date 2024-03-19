import React, { useEffect, useState } from 'react';
import { storyblokEditable, useStoryblokState } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';
import storyblokClient from '../storyblokClient'; // Adjust the import path as necessary

const ProductsandServicesSection = ({ blok }) => {
  blok = useStoryblokState(blok);

  // Assuming `blok.read_more` is the link object
  // and your project setup uses slugs for routing internal links
  const readMoreUrl = blok.read_more && blok.read_more.cached_url ? `/${blok.read_more.cached_url}` : '';

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
        <div>{render(blok.text_content)}</div>
        {readMoreUrl && (
          <a href={readMoreUrl} target="_blank" rel="noopener noreferrer" className="read-more-link">
            {blok.read_more.text || 'Read More'}
          </a>
        )}
      </div>
    </section>
  );
};

export default ProductsandServicesSection;
