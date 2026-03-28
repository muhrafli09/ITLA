import React from 'react';

interface InstagramLogoProps {
  size?: number;
  className?: string;
}

export function InstagramLogo({ size = 48, className = '' }: InstagramLogoProps) {
  const logoSize = size;
  const squareSize = logoSize * 0.7;
  const borderWidth = logoSize * 0.086;
  const circleBigSize = logoSize * 0.3;
  const circleSmallSize = logoSize * 0.125;

  return (
    <a
      href="https://www.instagram.com/dppitla/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center transition-transform hover:scale-110 ${className}`}
      aria-label="Instagram ITLA"
    >
      <div
        className="flex items-center justify-center"
        style={{
          height: `${logoSize}px`,
          width: `${logoSize}px`,
          background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)',
          borderRadius: `${logoSize * 0.3}px`,
        }}
      >
        <div
          style={{
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            backgroundColor: 'transparent',
            border: `${borderWidth}px solid white`,
            borderRadius: `${logoSize * 0.225}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Circle Big */}
          <div
            style={{
              height: `${circleBigSize}px`,
              width: `${circleBigSize}px`,
              backgroundColor: 'transparent',
              border: `${borderWidth}px solid white`,
              borderRadius: '50%',
            }}
          />
          {/* Circle Small */}
          <div
            style={{
              width: `${circleSmallSize}px`,
              height: `${circleSmallSize}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
              position: 'absolute',
              top: `${logoSize * 0.125}px`,
              right: `${logoSize * 0.125}px`,
            }}
          />
        </div>
      </div>
    </a>
  );
}
