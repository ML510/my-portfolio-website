'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Renders the element itself (no wrapper div) and fades it in
 * once it scrolls into view. `delay` (ms) staggers siblings.
 */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={`${className} reveal${visible ? ' visible' : ''}`} {...rest}>
      {children}
    </Tag>
  );
}
