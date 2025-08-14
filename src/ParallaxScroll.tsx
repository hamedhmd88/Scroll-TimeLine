import { useEffect, useRef } from 'react';

function ParallaxScroll() {
  const rowsRef = useRef<HTMLDivElement[]>([]);

  const updateRows = () => {
    rowsRef.current.forEach((item, index) => {
      if (item) {
        const rect = item.getBoundingClientRect();
        let visibility = Math.max(0, 1 - rect.top / window.innerHeight);
        visibility = Math.min(visibility, 1);

        const direction = index % 2 === 0 ? 1 : -1;
        const translateX = (visibility * 300 - 200) * direction;

        item.style.transform = `translateX(${translateX}px)`;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', updateRows);
    window.addEventListener('load', updateRows);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateRows);
      window.removeEventListener('load', updateRows);
    };
  }, []);

  return (
    <section className='section'>

      {Array.from({ length: 5 }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="row"
          ref={(el) => {
            if (el) rowsRef.current[rowIndex] = el;
          }}
        >
          {Array.from({ length: 5 }).map((_, itemIndex) => (
            <div key={itemIndex} className="item"></div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default ParallaxScroll;