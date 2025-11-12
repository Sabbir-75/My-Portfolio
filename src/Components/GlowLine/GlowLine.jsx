import React from 'react';

const GlowLine = ({ orientation, position, className = '' }) => {
  const isVertical = orientation === 'vertical';

  const containerClasses = isVertical
    ? 'absolute top-0 h-full' // full height parent
    : 'absolute left-0 w-full'; // full width parent

  const positionStyle = isVertical
    ? { left: position }       // vertical line: left position
    : { top: position };       // horizontal line: top position

  return (
    <div className={`${containerClasses} ${className}`} style={positionStyle}>
      <div
        className="absolute inset-0"
        style={{
          background: isVertical
            ? `linear-gradient(to bottom, transparent, #FF014F, transparent)`
            : `linear-gradient(to right, transparent, #FF014F, transparent)`,
          width: isVertical ? '2px' : '100%',
          height: isVertical ? '100%' : '2px',
        }}
      />
    </div>
  );
};

export default GlowLine;
