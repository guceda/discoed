import { FC, useMemo } from 'react';
import icons, { Icons } from '../../../assets/icons';

export interface IconProps {
  icon: Icons;
  height?: number;
  width?: number;
  viewBox?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  fill?: string;
}

const Icon: FC<IconProps> = (props) => {
  const { icon, viewBox, height = 20, width = 20 } = props;

  const iconEl = useMemo(() => {
    const el = icons[icon];
    return typeof el === 'function' ? el(props) : el;
  }, [icon, props]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox || '0 0 8 8'}
      fill="none"
    >
      {iconEl}
    </svg>
  );
};

export default Icon;
