'use client';

import { useEffect, useState } from 'react';

export default function ScrollUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY >= 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href="#home" className={`scrollup${show ? ' show' : ''}`} id="scroll-up" aria-label="Scroll to top">
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}
