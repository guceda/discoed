import { FC, FormEvent, useCallback } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex, { FlexProps } from '../flex/Flex';
import Icon from '../icon/Icon';
import { containerStyles, iconStyles } from './styles';

export interface InputProps extends Omit<FlexProps, 'onChange'> {
  onChange: (Input: string) => void;
  icon?: JSX.Element;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ onChange, icon, placeholder }) => {
  const theme = useTheme();

  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value),
    [onChange],
  );

  return (
    <Flex flexDirection="row" width="100%" style={containerStyles(theme)}>
      <Flex style={iconStyles(theme)}>{icon && <Icon icon={icon} />}</Flex>
      <input placeholder={placeholder} onChange={handleChange} />
    </Flex>
  );
};

export default Input;
