import { FC, useCallback, useState } from 'react';
import Editor, { Monaco, OnMount } from '@monaco-editor/react';
import { editor, Selection } from 'monaco-editor';
import { v4 as uuidv4 } from 'uuid';
import Flex, { FlexProps } from '../../atoms/flex/Flex';
import { useTheme } from '../../../providers/ThemeProvider';
import { containerStyles } from './styles';

import contentWidget, {
  WidgetNode,
  WIDGET_ID,
} from './codeAnnotation/ContentWidget';
import { useEditor } from '../../../providers/EditorProvider';

export interface CodeEditorProps extends FlexProps {
  content?: string;
}

const CodeEditor: FC<CodeEditorProps> = ({ content }) => {
  const theme = useTheme();
  const [line, setLine] = useState(-1);
  const { dispatch } = useEditor();

  const getOwnWidgets = useCallback((editor: editor.IStandaloneCodeEditor) => {
    // eslint-disable-next-line no-underscore-dangle
    const widgets = (editor as any)._contentWidgets;
    return Object.keys(widgets).reduce((acc, widgetName) => {
      if (widgetName.includes(WIDGET_ID)) {
        return { ...acc, [widgetName]: widgets[widgetName] };
      }
      return acc;
    }, {});
  }, []);

  const getWidgetInLine = useCallback(
    (
      editor: editor.IStandaloneCodeEditor,
      line: number,
    ): WidgetNode | undefined => {
      const ownWidgets = getOwnWidgets(editor);
      const widgetName = Object.keys(ownWidgets).find(
        (x: string) =>
          (ownWidgets as any)[x].position.position.lineNumber === line,
      );
      return widgetName ? (ownWidgets as any)[widgetName].widget : null;
    },
    [getOwnWidgets],
  );

  const removeInactiveWidgets = useCallback(
    (editor: editor.IStandaloneCodeEditor, line: number) => {
      const widgets = getOwnWidgets(editor);
      Object.values(widgets).forEach((entry: any) => {
        const { widget } = entry;
        const position = widget.getPosition()?.position?.lineNumber;
        if (position !== line && !widget.executed) {
          editor.removeContentWidget(widget);
        }
      });
    },
    [getOwnWidgets],
  );

  const handleContentChange = useCallback(
    (
      editor: editor.IStandaloneCodeEditor,
      ev: editor.IModelContentChangedEvent,
    ) => {
      const { startLineNumber, endLineNumber } = ev.changes[0].range;

      const widgets = getOwnWidgets(editor);
      Object.values(widgets).forEach((entry: any) => {
        const { widget } = entry;
        const position = widget.getPosition()?.position?.lineNumber;
        if (
          position > endLineNumber ||
          (position >= startLineNumber && position <= endLineNumber)
        ) {
          editor.removeContentWidget(widget);
        }
      });
    },
    [getOwnWidgets],
  );

  const handleSelectionChange = (
    monaco: Monaco,
    editor: editor.IStandaloneCodeEditor,
    widgetInLine?: WidgetNode,
  ) => {
    const prevSelection = widgetInLine?.selection;
    const newSelection = editor.getSelection();
    if (prevSelection && newSelection) {
      const isSameSelection = prevSelection?.equalsSelection(newSelection);
      if (!isSameSelection && !widgetInLine.executed) {
        const w = contentWidget(monaco, editor, uuidv4());
        editor.removeContentWidget(widgetInLine);
        editor.addContentWidget(w);
      }
    }
  };

  const handleMouseUp = (
    monaco: Monaco,
    editor: editor.IStandaloneCodeEditor,
  ) => {
    const selection = editor.getSelection();
    const { lineNumber } = (selection as Selection).getEndPosition();
    const existingWidgetInLine = getWidgetInLine(editor, lineNumber);
    if (line !== lineNumber) setLine(lineNumber);
    if (!existingWidgetInLine) {
      const w = contentWidget(monaco, editor, uuidv4());
      removeInactiveWidgets(editor, lineNumber);
      editor.addContentWidget(w);
    }
    handleSelectionChange(monaco, editor, existingWidgetInLine);
  };

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    dispatch(editor);
    editor.onDidChangeModelContent((ev) => handleContentChange(editor, ev));
    editor.onMouseUp(() => handleMouseUp(monaco, editor));
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
