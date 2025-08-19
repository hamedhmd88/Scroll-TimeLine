import React from 'react';

const ScrollerTimeLineTwo: React.FC = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Python', 'Java', 'C++', 'PHP', 'SQL', 'MongoDB',
    'Git', 'Docker', 'AWS', 'GraphQL', 'Redux', 'Next.js'
  ];

  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];
  const reversedSkills = [...skills, ...skills].reverse();

  return (
    <div className="scroller-container">
      <div className="shadow-left"></div>
      <div className="shadow-right"></div>
      
      {/* Row 1 - Scrolling right */}
      <div className="scroller-row">
        <div className="scroller-track scroller-line scrollertimeline-right">
          {duplicatedSkills.map((skill, index) => (
            <div key={`right-${index}`} className="scroller-item">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling left */}
      <div className="scroller-row">
        <div className="scroller-track scroller-line scrollertimeline-left">
          {reversedSkills.map((skill, index) => (
            <div key={`left-${index}`} className="scroller-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
      {/* Row 3 - Scrolling right */}
      <div className="scroller-row">
        <div className="scroller-track scroller-line scrollertimeline-right">
          {duplicatedSkills.map((skill, index) => (
            <div key={`right-${index}`} className="scroller-item">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Row 4 - Scrolling left */}
      <div className="scroller-row">
        <div className="scroller-track scroller-line scrollertimeline-left">
          {reversedSkills.map((skill, index) => (
            <div key={`left-${index}`} className="scroller-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollerTimeLineTwo;