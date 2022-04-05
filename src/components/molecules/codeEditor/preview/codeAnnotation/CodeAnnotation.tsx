import { FC, useState, MouseEvent, useEffect, useCallback } from 'react';
import getPreview from 'static-query-analyzer';
import { useTheme } from '../../../../../providers/ThemeProvider';
import Flex from '../../../../atoms/flex/Flex';
import { containerStyles, buttonStyles, previewStyles } from './styles';

export interface CodeAnnotationsProps {
  content: string;
  setExec: (value: boolean) => void;
  onClose: () => void;
  onPrevSelection: (show: boolean) => void;
}

const CodeAnnotation: FC<CodeAnnotationsProps> = ({
  content,
  setExec,
  onClose,
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
          preview
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
