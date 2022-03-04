import { FC, ReactElement } from 'react';

export interface IconProps {
  icon: ReactElement;
  height?: number;
  width?: number;
  viewBox?: string;
}

const Icon: FC<IconProps> = ({ icon, viewBox, height = 20, width = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox || '0 0 8 8'}
      fill="none"
    >
      {icon}
    </svg>
  );
};

export default Icon;
