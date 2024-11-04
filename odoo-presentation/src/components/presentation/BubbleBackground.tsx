'use client';

import React, { useState, useEffect } from 'react';

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    duration: number;
    color: string;
  }>>([]);
  
  const colors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];

  useEffect(() => {
    const createBubble = () => ({
      id: Math.random(),
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      duration: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const interval = setInterval(() => {
      setBubbles(prev => [...prev, createBubble()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setBubbles(prev => prev.slice(-15));
    }, 5000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full opacity-30 animate-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-10%',
            backgroundColor: bubble.color,
            animation: `float ${bubble.duration}s linear forwards`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;