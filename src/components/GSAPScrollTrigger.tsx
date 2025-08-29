import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ... existing code ... (حذف SplitText مرتبط)

const GSAPScrollTrigger: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.from(section, {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        });
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="left-column">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="section" ref={(el) => sectionsRef.current[i - 1] = el}>
            <h2>Heading {i}</h2>
            <p>Text content for section {i}.</p>
          </div>
        ))}
      </div>
      <div className="right-column">
        <div className="square"></div>
      </div>
    </div>
  );
};

export default GSAPScrollTrigger;