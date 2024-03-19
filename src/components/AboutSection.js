import React from 'react';
import { storyblokEditable, useStoryblokState } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer'; // Import the render function

const AboutSection = ({ blok }) => {
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
    <section {...storyblokEditable(blok)} className="about_section" style={dynamicStyle}>
      <div className="container">
        <h1>{blok.headline}</h1>
        {render(blok.text_content)}
      </div>
    </section>
  );
};

export default AboutSection;