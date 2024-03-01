import React, { useState } from 'react';
import { storyblokEditable } from "@storyblok/react";

const TeamMember = ({ blok }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Add a conditional class based on isExpanded state
  const titleClass = isExpanded ? "title-expanded" : "title-collapsed";

  return (
    <div {...storyblokEditable(blok)} className="team-member" onClick={toggleExpand}>
      <h3>{blok.name}</h3>
      {/* Apply the conditional class to the h4 element */}
      <h4 className={titleClass}>{blok.title}</h4>
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