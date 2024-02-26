import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const TeamSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="team-section" id="team_section">
      <h1>Team</h1>
      {blok.members.map((memberBlok) => (
        <StoryblokComponent blok={memberBlok} key={memberBlok._uid} />
      ))}
    </section>
  );
};

export default TeamSection;
