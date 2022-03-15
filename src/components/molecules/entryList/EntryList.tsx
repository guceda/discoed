import { FC, useState, useCallback } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Entry, { EntryProps } from '../entry/Entry';
import { containerStyles, contentStyles, searchStyles } from './styles';
import * as icons from '../../../assets/icons';
import Flex from '../../atoms/flex/Flex';
import Input from '../../atoms/input/Input';
import NoData from '../noData/noData';
import Blink from '../../atoms/blink/Blink';

export interface EntryListProps {
  entries: Omit<EntryProps, 'onOpen' | 'open'>[];
  searching: boolean;
  search: string;
  setSearch: (search: string) => void;
}

const EntryList: FC<EntryListProps> = ({
  entries,
  searching,
  search,
  setSearch,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState<number>();

  const handleOpen = useCallback(
    (idx) => setOpen((curr) => (curr === idx ? null : idx)),
    [],
  );

  return (
    <Flex flexDirection="column" style={containerStyles(theme)}>
      <Flex style={searchStyles(theme)} width="100%">
        <Input
          icon={icons.search}
          onChange={setSearch}
          placeholder="find an operation..."
        />
        {searching && <Blink />}
      </Flex>
      <Flex flexDirection="column" style={contentStyles(theme)}>
        <Flex flexDirection="column" height="100%">
          {entries.length ? (
            entries.map((entry, idx) => (
              <Entry
                search={search}
                key={entry.command}
                open={open === idx}
                onOpen={() => handleOpen(idx)}
                {...entry}
              />
            ))
          ) : (
            <NoData />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EntryList;
