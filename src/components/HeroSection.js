import React from 'react';
import { storyblokEditable, useStoryblokState } from '@storyblok/react';

const HeroSection = ({ blok }) => {
  blok = useStoryblokState(blok);

  // Ensure the image URL uses HTTPS protocol
  const imageUrl = blok.background_image.filename.startsWith('//') ? `https:${blok.background_image.filename}` : blok.background_image.filename;

  // Inline style for the dynamic background image
  const dynamicStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <section {...storyblokEditable(blok)} className="hero-section" style={dynamicStyle}>
      <div className="container"> {/* Use class-based styling */}
        <h1>{blok.headline}</h1>
        <h3>{blok.subheadline}</h3>
      </div>
    </section>
  );
};

export default HeroSection;
