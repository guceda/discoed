import { FC, ReactElement } from 'react';

export interface IconProps {
  icon: ReactElement;
  height?: number;
  width?: number;
}

const Icon: FC<IconProps> = ({ icon, height = 25, width = 25 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 8" fill="none">
      {icon}
    </svg>
  );
};

export default Icon;
