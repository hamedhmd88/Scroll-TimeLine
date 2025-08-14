import React from 'react';

const ScrollerTimeLine: React.FC = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Python', 'Java', 'C++', 'PHP', 'SQL', 'MongoDB',
    'Git', 'Docker', 'AWS', 'GraphQL', 'Redux', 'Next.js'
  ];

  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="scroller-container">
      <div className="shadow-left"></div>
      <div className="shadow-right"></div>
      
      {/* Row 1 - Scrolling right */}
      <div className="scroller-row">
        <div className="scroller-track scroller-track-right">
          {duplicatedSkills.map((skill, index) => (
            <div key={`right-${index}`} className="scroller-item">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling left */}
      <div className="scroller-row">
        <div className="scroller-track scroller-track-left">
          {duplicatedSkills.map((skill, index) => (
            <div key={`left-${index}`} className="scroller-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollerTimeLine;