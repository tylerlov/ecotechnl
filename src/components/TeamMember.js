import React, { useState } from 'react';
import { storyblokEditable } from "@storyblok/react";

const TeamMember = ({ blok }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div {...storyblokEditable(blok)} className="team-member" onClick={toggleExpand}>
      <h3>{blok.name}</h3>
      <h4>{blok.title}</h4>
      {isExpanded && (
        <div className="member-details">
            {blok.image && <img src={blok.image.filename} alt={blok.name} className="team-member-image" />}
          {blok.description && <p className="team-member-description">{blok.description}</p>}
        </div>
      )}
      <hr className="divider" />
    </div>
  );
};

export default TeamMember;