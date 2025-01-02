import React from 'react';

interface IconProps {
  name: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
