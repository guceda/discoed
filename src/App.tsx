import { FC } from 'react';
import ThemeProvider from './providers/ThemeProvider';
import CodeEditor from './components/molecules/codeEditor/CodeEditor';
import EntryList from './components/molecules/entryList/EntryList';
import entries from './mock/entries';
import './App.css';
import Layout from './components/atoms/layout/Layout';
import Divider from './components/atoms/divider/Divider';

const App: FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <Layout>
            <EntryList entries={entries} />
            <Divider />
            <CodeEditor content="const test = null;" />
          </Layout>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
