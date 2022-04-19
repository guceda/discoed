import { editor } from 'monaco-editor';
import {
  FC,
  createContext,
  useContext,
  ReactChild,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

interface EditorProviderProps {
  children: ReactChild;
}

type State = editor.IStandaloneCodeEditor | undefined;

const EditorContext = createContext<
  { state: State; dispatch: Dispatch<SetStateAction<State>> } | undefined
>(undefined);

const EditorProvider: FC<EditorProviderProps> = ({ children }) => {
  const [state, dispatch] = useState<editor.IStandaloneCodeEditor>();
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

export default EditorProvider;
