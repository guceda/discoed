import { FC, useState, MouseEvent } from 'react';
import { useTheme } from '../../../../../providers/ThemeProvider';
import Flex from '../../../../atoms/flex/Flex';
import getPreview from '../getPreview';
import { containerStyles, buttonStyles } from './styles';

export interface CodeAnnotationsProps {
  content: string;
  setExec: (value: boolean) => void;
  onClose: () => void;
}

const CodeAnnotation: FC<CodeAnnotationsProps> = ({
  content,
  setExec,
  onClose,
}) => {
  const theme = useTheme();
  const [previewing, setPreviewing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');

  const togglePreview = (ev: MouseEvent<HTMLDivElement>, preview: boolean) => {
    setExec(preview);
    ev.stopPropagation();
    if (preview) {
      setLoading(true);
      setPreview(getPreview(content));
      setTimeout(() => setLoading(false), 500);
    }
    setPreviewing((prev) => preview || !prev);
  };

  return (
    <Flex style={containerStyles(theme)}>
      {loading && <Flex>previewing...</Flex>}
      {!loading && !previewing && (
        <Flex
          onClick={(ev) => togglePreview(ev, true)}
          style={buttonStyles(theme)}
        >
          preview up to here
        </Flex>
      )}
      {!loading && previewing && (
        <>
          <Flex
            style={buttonStyles(theme)}
            onClick={(ev) => {
              togglePreview(ev, false);
              onClose();
            }}
          >
            close
          </Flex>
          <Flex>{preview}</Flex>
        </>
      )}
    </Flex>
  );
};

export default CodeAnnotation;
