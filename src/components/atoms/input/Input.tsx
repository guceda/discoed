import { FormEvent, forwardRef, useCallback } from 'react';
import { Icons } from '../../../assets/icons';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex, { FlexProps } from '../flex/Flex';
import Icon from '../icon/Icon';
import { containerStyles, iconStyles, inputStyles } from './styles';

export interface InputProps extends Omit<FlexProps, 'onChange'> {
  onChange: (Input: string) => void;
  icon?: Icons;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement | null, InputProps>(
  ({ onChange, icon, placeholder, ...props }, ref) => {
    const theme = useTheme();

    const handleChange = useCallback(
      (event: FormEvent<HTMLInputElement>) =>
        onChange(event.currentTarget.value),
      [onChange],
    );

    return (
      <Flex flexDirection="row" width="100%" style={containerStyles(theme)}>
        <Flex style={iconStyles(theme)}>{icon && <Icon icon={icon} />}</Flex>
        <input
          style={inputStyles}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
          ref={ref}
        />
      </Flex>
    );
  },
);

export default Input;
