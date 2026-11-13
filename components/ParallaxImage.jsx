'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ParallaxImage({ src, width, height, alt = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      if (ref.current && scrolled < window.innerHeight) {
        ref.current.style.transform = `translateY(${scrolled * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Image
      ref={ref}
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority
      className="home__blob"
      style={{ height: 400, width: 'auto' }}
    />
  );
}
