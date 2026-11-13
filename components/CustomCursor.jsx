'use client';

import { useEffect, useRef } from 'react';

const dotStyle = {
  position: 'fixed',
  left: -100,
  top: -100,
  width: 8,
  height: 8,
  background: 'var(--clr-primary)',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 9999,
  transition: 'transform 0.1s ease',
  mixBlendMode: 'multiply',
};

const ringStyle = {
  position: 'fixed',
  left: -100,
  top: -100,
  width: 30,
  height: 30,
  border: '2px solid rgba(178,199,58,0.65)',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 9998,
  transition: 'all 0.15s ease',
};

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    // No custom cursor on touch devices
    if ('ontouchstart' in window) {
      dot.current.style.display = 'none';
      ring.current.style.display = 'none';
      return;
    }

    const onMove = (e) => {
      dot.current.style.left = `${e.clientX - 4}px`;
      dot.current.style.top = `${e.clientY - 4}px`;
      ring.current.style.left = `${e.clientX - 15}px`;
      ring.current.style.top = `${e.clientY - 15}px`;
    };

    const onOver = (e) => {
      const interactive = e.target instanceof Element && e.target.closest('a, button');
      dot.current.style.transform = interactive ? 'scale(2.5)' : 'scale(1)';
      ring.current.style.transform = interactive ? 'scale(1.5)' : 'scale(1)';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <div ref={dot} style={dotStyle} aria-hidden="true" />
      <div ref={ring} style={ringStyle} aria-hidden="true" />
    </>
  );
}
