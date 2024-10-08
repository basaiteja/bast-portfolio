// Skills.jsx

import React from 'react';
import './Skills.scss';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML',  },
    { name: 'CSS,SASS', },
    { name: 'JavaScript',  },
    { name: 'Reacthooks',  },
    { name: 'Redux',  },    
    { name: 'Tailwind'},

    
    
  ];

  const backendSkills = [
    { name: 'Firebase' },
    { name: 'Node JS'  },
    { name: 'express JS'  },
    { name: 'MongoDB'  },
    
  ];

  const otherSkills = [
    
   
    { name: 'Testing: Jest, React Testing Library'},
    { name: 'Git'},
    { name: 'AppDynamics'},
    { name: 'Photoshop'},
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
