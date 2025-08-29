import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const GSAPScrollSplit: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, { type: 'words' });

      gsap.from(split.words, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'center bottom', // اجرا پس از قرارگیری کامل در viewport
          end: ' bottom bottom',
          toggleActions: 'play none none none',
          once: false,             // فقط یک‌بار اجرا شود
          markers: false           // برای تست، بعداً می‌توانید حذف کنید
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
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

export default GSAPScrollSplit;
