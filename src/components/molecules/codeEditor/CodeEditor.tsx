import { FC } from 'react';
import Editor from '@monaco-editor/react';
import Flex, { FlexProps } from '../../atoms/flex/Flex';
import { useTheme } from '../../../providers/ThemeProvider';
import { containerStyles } from './styles';

export interface CodeEditorProps extends FlexProps {
  content?: string;
}

const CodeEditor: FC<CodeEditorProps> = ({ content }) => {
  const theme = useTheme();
  return (
    <Flex style={containerStyles(theme)} width="800px">
      <Editor defaultLanguage="javascript" defaultValue={content} />
    </Flex>
  );
};

export default CodeEditor;
