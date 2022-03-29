import { Monaco } from '@monaco-editor/react';
import { editor, Position, Selection } from 'monaco-editor';
import ReactDOM from 'react-dom';
import CodeAnnotation from './CodeAnnotation';

export const WIDGET_ID = 'annotation';

export interface WidgetPosition {
  position: {
    lineNumber: number;
    column: number;
  };
  preference: editor.ContentWidgetPositionPreference[];
}

export interface WidgetNode extends editor.IContentWidget {
  domNode: HTMLElement;
  position: WidgetPosition | undefined;
  executed: boolean;
  id: string;
  getSelectionEnd: () => Position;
  setExecution: (value: boolean) => void;
  getSelectedQuery: () => string;
  removeSelf: () => void;
}

const contentWidget = (
  monaco: Monaco,
  editor: editor.IStandaloneCodeEditor,
  id: string,
): WidgetNode => ({
  id: `${WIDGET_ID}-${(editor.getPosition() as Position).lineNumber}-${id}`,
  suppressMouseDown: true,
  domNode: null as unknown as HTMLDivElement,
  executed: false,
  position: undefined,

  getId() {
    return this.id;
  },

  removeSelf() {
    editor.removeContentWidget(this);
  },

  getSelectionEnd() {
    const selection = editor.getSelection();
    return (selection as Selection).getEndPosition();
  },

  setExecution(val: boolean) {
    this.executed = val;
  },

  getSelectedQuery() {
    const model = editor?.getModel();
    const selection = editor.getSelection();
    const isEmptySelection = selection?.isEmpty();

    if (isEmptySelection) {
      const editorContent = model ? model.getLinesContent() : [];
      const { lineNumber } = this.getSelectionEnd();
      const arrayContent = editorContent.slice(0, lineNumber);
      return arrayContent.join(' ').trim();
    }
    if (editor && model && selection) {
      const selectionContent = model.getValueInRange(selection);
      return selectionContent;
    }
    return '';
  },

  getDomNode() {
    const data = this.getSelectedQuery();
    const exec = this.setExecution.bind(this);
    const removeSelf = this.removeSelf.bind(this);
    const cmp = (
      <CodeAnnotation onClose={removeSelf} setExec={exec} content={data} />
    );
    const container = document.createElement('div');
    ReactDOM.render(cmp, container);
    this.domNode = container;
    return this.domNode;
  },
  getPosition() {
    this.getDomNode();
    if (!this.position) {
      const { lineNumber } = this.getSelectionEnd();
      this.position = {
        position: {
          lineNumber,
          column: Infinity,
        },
        preference: [monaco.editor.ContentWidgetPositionPreference.EXACT],
      };
    }

    return this.position;
  },
});

export default contentWidget;
