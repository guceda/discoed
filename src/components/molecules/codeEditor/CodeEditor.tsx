import { FC } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import Flex, { FlexProps } from '../../atoms/flex/Flex';
import { useTheme } from '../../../providers/ThemeProvider';
import { containerStyles } from './styles';
import getPreview from './preview/getPreview';

export interface CodeEditorProps extends FlexProps {
  content?: string;
}

const CodeEditor: FC<CodeEditorProps> = ({ content }) => {
  const theme = useTheme();

  const preview = (
    line: number,
    contentToCurrentLine: string[],
    currLine: Element | undefined,
  ) => {
    const button = document.querySelector(`#play-button-${line}`);
    if (button) button.innerHTML = 'hide preview';
    const prev = getPreview(contentToCurrentLine.join(' ').trim());

    const el = document.createElement('span');
    el.style.margin = '0 0 0 20px';
    el.style.color = 'salmon';
    el.className = `preview`;
    el.id = `preview-${line}`;
    el.innerText = prev.join(', ');

    document.querySelector(`#preview-${line}`)?.remove();
    const container = currLine?.querySelector('.preview-container');
    container?.appendChild(el);
  };

  const hidePreview = (line: number) => {
    document.querySelector(`#preview-${line}`)?.remove();

    const button = document.querySelector(`#play-button-${line}`);
    if (button) button.innerHTML = 'play up to here';
  };

  const activateLine = (editorModel: any, line: number) => {
    const lines = document.querySelector('.view-lines');
    const currLine = lines?.children[line - 1];
    const contentToCurrentLine = editorModel.getLinesContent().slice(0, line);

    let container = document.querySelector(`#preview-container-${line}`);
    const hasPreview = !!container?.querySelector(`#preview-${line}`);

    const el = document.createElement('button');
    el.onclick = (ev) => {
      ev.stopPropagation();
      return hasPreview
        ? hidePreview(line)
        : preview(line, contentToCurrentLine, currLine);
    };
    el.style.margin = '0 0 0 20px';
    el.style.color = 'gray';
    el.className = 'play-button';
    el.id = `play-button-${line}`;
    el.innerText = hasPreview ? 'hide preview' : 'play up to here';

    if (!container) {
      container = document.createElement('div');
      container.className = `preview-container`;
      container.id = `preview-container-${line}`;
    }

    document.querySelectorAll(`.${el.className}`)?.forEach((e) => e.remove());
    container.prepend(el);
    (currLine as any).style.display = 'flex';
    currLine?.appendChild(container);
  };

  const handleEditorDidMount: OnMount = (editor) => {
    editor.onDidChangeCursorPosition((cursor) =>
      activateLine(editor.getModel(), cursor.position.lineNumber),
    );
  };

  return (
    <Flex style={containerStyles(theme)} width="1000px">
      <Editor
        language="sql"
        defaultValue={content}
        onMount={handleEditorDidMount}
      />
    </Flex>
  );
};

export default CodeEditor;
