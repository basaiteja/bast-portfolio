// Skills.jsx

import React from 'react';
import './Skills.scss';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'SASS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Basic' },
    { name: 'TypeScript', level: 'Basic' },
    { name: 'Material UI', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'PostgreSQL', level: 'Basic' },
    { name: 'Node JS', level: 'Intermediate' },
    { name: 'Express JS', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
  ];

  const otherSkills = [
    { name: 'Git', level: 'Intermediate' },
  ];

  const categories = [
    { title: 'Frontend Development', skills: frontendSkills },
    { title: 'Backend Development', skills: backendSkills },
    { title: 'Others', skills: otherSkills },
  ];

  const SkillArticle = ({ skill }) => (
    <article>
      {/* <img src="./assets/checkmark.png" alt="Experience icon" className="icon" /> */}
      <div>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>
      </div>
    </article>
  );

  return (
    <section id="Skills">
      <div className="skills-container">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h2 className="skills-sub-title">{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <SkillArticle key={skillIndex} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
