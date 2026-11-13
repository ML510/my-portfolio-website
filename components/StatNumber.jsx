'use client';

import { useEffect, useRef, useState } from 'react';

/** Counts up from 0 to `value` the first time it scrolls into view. */
export default function StatNumber({ value, suffix = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let count = 0;
        const step = Math.ceil(value / 60);
        timer = setInterval(() => {
          count += step;
          if (count >= value) {
            count = value;
            clearInterval(timer);
          }
          setDisplay(count);
        }, 25);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [value]);

  return (
    <span className="stat__number" ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
