import {
  FC,
  useState,
  useCallback,
  useMemo,
  useRef,
  useLayoutEffect,
} from 'react';
import { IRange, Position } from 'monaco-editor';
import { useTheme } from '../../../providers/ThemeProvider';
import Entry, { EntryProps } from '../entry/Entry';
import { containerStyles, contentStyles, counterStyles } from './styles';
import Flex from '../../atoms/flex/Flex';
import Text from '../../atoms/text/Text';
import Search from '../search/Search';
import NoData from '../noData/NoData';
import useKeydown from '../../../hooks/useKeydown';
import { useEditor } from '../../../providers/EditorProvider';

export interface EntryListProps {
  entries: Omit<EntryProps, 'onOpen' | 'open' | 'onSelect' | 'select'>[];
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
  const [selected, setSelected] = useState<number>(0);

  const { state: editor } = useEditor();

  const handleSelected = useCallback((idx) => {
    setSelected((curr) => (curr === idx ? null : idx));
    setOpen((curr) => (curr !== idx ? null : idx));
  }, []);

  const upHandler = useCallback(() => {
    listRef.current?.focus();
    if (selected > 0) handleSelected(selected - 1);
  }, [handleSelected, selected]);

  const downHandler = useCallback(() => {
    listRef.current?.focus();
    if (selected < entries.length - 1) handleSelected(selected + 1);
  }, [entries.length, handleSelected, selected]);

  const enterHandler = useCallback(() => {
    if (
      document?.activeElement?.id === 'search-input' ||
      document?.activeElement?.tagName === 'BODY'
    ) {
      const name = entries[selected].command;
      const params = entries[selected].params?.join(',');
      const command = `${name}(${params})`;
      const position = editor?.getPosition();
      editor?.trigger('keyboard', 'type', { text: command });
      const range = {
        startLineNumber: (position as Position).lineNumber,
        startColumn: (position as Position).column + name.length + 1,
        endLineNumber: (position as Position).lineNumber,
        endColumn:
          (position as Position).column +
          name.length +
          1 +
          (params?.length || 0),
      } as IRange;
      editor?.setSelection(range);
      setTimeout(() => editor?.focus());
    }
  }, [editor, entries, selected]);

  useKeydown(document, 'ArrowUp', upHandler);
  useKeydown(document, 'ArrowDown', downHandler);
  useKeydown(document, 'Enter', enterHandler);

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
      <Search searching={searching} setSearch={setSearch} />
      <Flex flexDirection="column" style={contentStyles(theme)} ref={listRef}>
        <Flex flexDirection="column" height="100%">
          {entries.length ? (
            entries.map((entry, idx) => (
              <Entry
                search={search}
                // eslint-disable-next-line react/no-array-index-key
                key={`entry.command-${idx}`}
                selected={selected === idx}
                open={open === idx}
                onOpen={() => handleOpen(idx)}
                {...entry}
                onSelect={() => handleSelected(idx)}
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
