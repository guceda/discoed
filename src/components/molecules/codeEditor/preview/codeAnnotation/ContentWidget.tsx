import { Monaco } from '@monaco-editor/react';
import { editor, Position, Selection } from 'monaco-editor';
import ReactDOM from 'react-dom';
import CodeAnnotation from './CodeAnnotation';
import './selection.styles.css';

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
  position?: WidgetPosition;
  executed: boolean;
  id: string;
  selectedQuery?: string;
  selection: Selection | null;
  getSelectionEnd: () => Position;
  setExecution: (value: boolean) => void;
  getSelectedQuery: () => string;
  removeSelf: () => void;
  highlightSelection: () => void;
  hideSelection: () => void;
  decorations: string[];
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
  selectedQuery: undefined,
  selection: null,
  decorations: [],

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
    if (!this.selectedQuery || !this.selection) {
      const model = editor?.getModel();
      const selection = editor.getSelection();
      const isEmptySelection = selection?.isEmpty();

      if (isEmptySelection) {
        const editorContent = model ? model.getLinesContent() : [];
        const { lineNumber, column } = this.getSelectionEnd();
        const arrayContent = editorContent.slice(0, lineNumber);
        this.selectedQuery = arrayContent.join(' ').trim();
        this.selection = {
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: lineNumber,
          endColumn: column,
        } as Selection;
      } else if (editor && model && selection) {
        const selectionContent = model.getValueInRange(selection);
        this.selectedQuery = selectionContent;
        this.selection = selection;
      } else {
        this.selectedQuery = '';
        this.selection = selection;
      }
    }
    return this.selectedQuery;
  },

  highlightSelection() {
    const { startLineNumber, startColumn, endLineNumber, endColumn } = this
      .selection as Selection;
    this.decorations = editor.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(
            startLineNumber,
            startColumn,
            endLineNumber,
            endColumn,
          ),
          options: { inlineClassName: 'myLineDecoration' },
        },
      ],
    );
  },

  hideSelection() {
    this.decorations = editor.deltaDecorations(this.decorations, []);
  },

  getDomNode() {
    const data = this.getSelectedQuery();
    const exec = this.setExecution.bind(this);
    const removeSelf = this.removeSelf.bind(this);
    const cmp = (
      <CodeAnnotation
        onPrevSelection={(show) =>
          show ? this.highlightSelection() : this.hideSelection()
        }
        onClose={removeSelf}
        setExec={exec}
        content={data}
      />
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
