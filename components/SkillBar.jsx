'use client';

import { useEffect, useRef, useState } from 'react';

export default function SkillBar({ percent }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(percent);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  return <div className="skill__fill" ref={ref} style={{ width: `${width}%` }}></div>;
}
