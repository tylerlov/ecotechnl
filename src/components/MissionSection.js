import React from 'react';
import { storyblokEditable, StoryblokComponent, useStoryblokState } from '@storyblok/react';

const MissionSection = ({ blok }) => {
  blok = useStoryblokState(blok);

  // Ensure the image URL uses HTTPS protocol if necessary
  const imageUrl = blok.image.filename.startsWith('//') ? `https:${blok.image.filename}` : blok.image.filename;

  return (
    <section {...storyblokEditable(blok)} className="mission_section">
      <div className="container">
        {/* Render the headline */}
        <h1>{blok.headline}</h1>
        <div className="mission_content">
          <div className="mission_image">
            {/* Render the image asset */}
            <img src={imageUrl} alt="Mission Section " />
          </div>
          <div className="mission_statements">
            {/* Iterate over the MissionStatement blocks and render them */}
            {Array.isArray(blok.mission_statement) ? blok.mission_statement.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            )) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
