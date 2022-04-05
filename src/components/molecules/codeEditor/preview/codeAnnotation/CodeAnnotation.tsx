import { FC, useState, MouseEvent, useEffect, useCallback } from 'react';
import getPreview from 'static-query-analyzer';
import { useTheme } from '../../../../../providers/ThemeProvider';
import Flex from '../../../../atoms/flex/Flex';
import Icon from '../../../../atoms/icon/Icon';
import { containerStyles, buttonStyles, previewStyles } from './styles';
import icons from '../../../../../assets/icons';

export interface CodeAnnotationsProps {
  content: string;
  isSelection?: boolean;
  setExec: (value: boolean) => void;
  onClose: () => void;
  onPrevSelection: (show: boolean) => void;
}

const CodeAnnotation: FC<CodeAnnotationsProps> = ({
  content,
  setExec,
  onClose,
  isSelection,
  onPrevSelection,
}) => {
  const theme = useTheme();
  const [previewing, setPreviewing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');
  const [showSelection, setShowSelection] = useState(false);

  useEffect(() => {
    onPrevSelection(showSelection);
  }, [onPrevSelection, showSelection]);

  const togglePreview = useCallback(
    (ev: MouseEvent<HTMLDivElement>, preview: boolean) => {
      setExec(preview);
      ev.stopPropagation();
      if (preview) {
        setLoading(true);
        setPreview(getPreview(content));
        setTimeout(() => setLoading(false), 500);
      }
      setPreviewing((prev) => preview || !prev);
    },
    [content, setExec],
  );

  const debouncedsetShowSelection = useCallback(
    (show: boolean) => setTimeout(() => setShowSelection(show), 200),
    [],
  );

  const handleCloseClick = useCallback(
    (ev) => {
      togglePreview(ev, false);
      onClose();
    },
    [onClose, togglePreview],
  );

  return (
    <Flex style={containerStyles(theme)}>
      {loading && <Flex>previewing...</Flex>}
      {!loading && !previewing && (
        <Flex
          onClick={(ev) => togglePreview(ev, true)}
          style={buttonStyles(theme)}
        >
          <Icon
            width={17}
            height={18}
            viewBox="0 0 13 9"
            icon={isSelection ? icons.playSelection : icons.playAll}
          />
        </Flex>
      )}
      {!loading && previewing && (
        <>
          <Flex style={buttonStyles(theme)} onClick={handleCloseClick}>
            close
          </Flex>
          <Flex
            onMouseDown={() => setShowSelection(true)}
            onMouseUp={() => debouncedsetShowSelection(false)}
            onMouseLeave={() => debouncedsetShowSelection(false)}
            style={previewStyles}
          >
            {preview}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default CodeAnnotation;
