'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export interface OrbitItem {
  id: number | string;
  name: string;
  src?: string;
}

export interface RadialIntroProps {
  orbitItems: OrbitItem[];
  stageSize?: number;
  imageSize?: number;
}

export function RadialIntro({
  orbitItems,
  stageSize = 320,
  imageSize = 60,
}: RadialIntroProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const radius = (stageSize - imageSize) / 2;
  const itemCount = orbitItems.length;

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center"
      style={{
        width: stageSize,
        height: stageSize,
        position: 'relative',
      }}
    >
      {/* Center circle with ITLA logo */}
      <motion.div
        className="absolute rounded-full bg-white border-4 border-primary/30 z-10 flex items-center justify-center shadow-lg"
        style={{
          width: imageSize * 1.2,
          height: imageSize * 1.2,
        }}
      >
        <img
          src="/itla-logo.png"
          alt="ITLA Logo"
          className="w-3/4 h-3/4 object-contain"
        />
      </motion.div>

      {/* Orbit items container - rotates */}
      <motion.div
        style={{
          width: stageSize,
          height: stageSize,
          position: 'relative',
        }}
        animate={isInView ? { rotate: 360 } : {}}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {orbitItems.map((item, index) => {
          const angle = (360 / itemCount) * index;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={item.id}
              className="absolute flex items-center justify-center"
              style={{
                width: imageSize,
                height: imageSize,
                left: stageSize / 2 - imageSize / 2,
                top: stageSize / 2 - imageSize / 2,
                x: x,
                y: y,
              }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                    }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
            >
            <motion.div
              className="w-full h-full rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden p-2"
              whileHover={{
                scale: 1.2,
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
              }}
              animate={isInView ? { rotate: -360 } : {}}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                />
              ) : (
                <span className="text-xs font-bold text-center px-2 text-slate-700 group-hover:text-primary transition-colors">
                  {item.name}
                </span>
              )}
            </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
