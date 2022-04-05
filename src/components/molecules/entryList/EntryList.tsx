import {
  FC,
  useState,
  useCallback,
  useMemo,
  useRef,
  useLayoutEffect,
} from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import Entry, { EntryProps } from '../entry/Entry';
import {
  containerStyles,
  contentStyles,
  counterStyles,
  searchStyles,
} from './styles';
import icons from '../../../assets/icons';
import Flex from '../../atoms/flex/Flex';
import Input from '../../atoms/input/Input';
import NoData from '../noData/noData';
import Blink from '../../atoms/blink/Blink';
import Text from '../../atoms/text/Text';

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
  const listRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number>();

  const handleOpen = useCallback(
    (idx) => setOpen((curr) => (curr === idx ? null : idx)),
    [],
  );

  useLayoutEffect(() => {
    if (listRef?.current) {
      listRef.current.scrollTop = 0;
    }
  }, [search, listRef]);

  const counterText = useMemo(() => {
    if (search !== '') {
      return `${entries.length} ${entries.length === 1 ? 'match' : 'matches'}`;
    }
    return `${entries.length} ${entries.length === 1 ? 'entry' : 'entries'}`;
  }, [entries.length, search]);

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
      <Flex flexDirection="column" style={contentStyles(theme)} ref={listRef}>
        <Flex flexDirection="column" height="100%">
          {entries.length ? (
            entries.map((entry, idx) => (
              <Entry
                search={search}
                // eslint-disable-next-line react/no-array-index-key
                key={`entry.command-${idx}`}
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
      <Flex style={counterStyles(theme)}>
        <Text.CopySmall>{counterText}</Text.CopySmall>
      </Flex>
    </Flex>
  );
};

export default EntryList;
