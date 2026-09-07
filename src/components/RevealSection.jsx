import { useEffect, useRef, useState } from 'react';

function RevealSection({ children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.12 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`reveal-section ${isVisible ? 'reveal-section-visible' : ''}`}>
      {children}
    </div>
  );
}

export default RevealSection;