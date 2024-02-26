import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const MissionStatement = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="mission_statement">
      <p>{blok.content}</p>
    </div>
  );
};

export default MissionStatement;