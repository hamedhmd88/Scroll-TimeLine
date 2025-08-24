import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const GSAPSplitText: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, { type: 'words' });
      gsap.from(split.words, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,  // کمی بیشتر برای کلمات
        ease: 'power2.out'
      });
    }
  }, []);

  return (
    <div className="split-text-container">
      <p ref={textRef}>
        This is a longer sample text for SplitText animation. In this text, we want to show how characters appear one by one. GSAP is a powerful tool for animation and SplitText helps us easily split text and create engaging animations. I hope this example is helpful!
      </p>
    </div>
  );
};

export default GSAPSplitText;