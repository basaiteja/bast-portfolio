// Experience.jsx

import React from 'react';
import './Experience.scss';

const Experience = () => {
  const experiences = [
    { company: 'Growth Hack Solutions', role: 'React Developer', period: '2023 - Present' },
    { company: 'Infosys Limited', role: 'System Associate', period: '2022 - 2023' },
  ];

  const ExperienceItem = ({ experience }) => (
    <article>
      <div>
        <h3>{experience.company}</h3>
        <p>{experience.role}</p>
        <span>{experience.period}</span>
      </div>
    </article>
  );

  return (
    <section id="Experience">
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
