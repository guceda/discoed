import { FC, memo } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Flex from '../../atoms/flex/Flex';
import Entry, { EntryProps } from '../entry/Entry';
import { containerStyles } from './styles';

interface EntryListProps {
  entries: EntryProps[];
}

const EntryList: FC<EntryListProps> = ({ entries }) => {
  const theme = useTheme();

  return (
    <Flex flexDirection="column" style={containerStyles(theme)}>
      {entries.map((entry) => (
        <Entry key={entry.command} {...entry} />
      ))}
    </Flex>
  );
};

export default memo(EntryList);
