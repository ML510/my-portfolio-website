'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { TYPED_STRINGS } from '@/lib/data';

export default function TypedRole() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return <span className="auto-type" ref={el} />;
}
