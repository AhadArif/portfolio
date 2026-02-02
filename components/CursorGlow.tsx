'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${pos.x - 8}px, ${pos.y - 8}px)`,
        willChange: 'transform',
      }}
    >
      <div className="relative w-4 h-4">
        {/* Core cursor */}
        <div className="absolute inset-0 rounded-full bg-purple-600 dark:bg-white transition-all duration-200" />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full blur-md 
                        bg-purple-400/40 dark:bg-white/40 
                        scale-150 transition-all duration-200" />
      </div>
    </div>
  );
}
