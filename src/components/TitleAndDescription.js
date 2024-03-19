import React from 'react';
import { storyblokEditable, useStoryblokState } from '@storyblok/react';

const TitleAndDescription = ({ blok }) => {
  blok = useStoryblokState(blok);

  const imageUrl = blok.background_image.filename.startsWith('//') ? `https:${blok.background_image.filename}` : blok.background_image.filename;

  const dynamicStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section {...storyblokEditable(blok)} className="title_and_description" style={dynamicStyle}>
      <div className="container">
        <h1>{blok.headline}</h1>
        <div dangerouslySetInnerHTML={{ __html: blok.text_content }}></div>
      </div>
    </section>
  );
};

export default TitleAndDescription;