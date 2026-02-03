'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ willChange: 'transform' }}
    >
      <div className="relative w-3 h-3">
        {/* Core cursor */}
        <div className="absolute inset-0 rounded-full bg-purple-600 dark:bg-white" />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full blur-md 
                        bg-purple-400/40 dark:bg-white/40 
                        scale-150" />
      </div>
    </div>
  );
}
