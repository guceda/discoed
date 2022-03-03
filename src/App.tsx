import { FC } from 'react';
import ThemeProvider from './providers/ThemeProvider';
import CodeEditor from './components/molecules/codeEditor/CodeEditor';
import EntryList from './components/molecules/entryList/EntryList';
import entries from './mock/entries';
import './App.css';
import Layout from './components/atoms/layout/Layout';
import Divider from './components/atoms/divider/Divider';
import Text from './components/atoms/text/Text';

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
          <Text.H1 color="white">H1</Text.H1>
          <Text.H2 color="white">H2</Text.H2>
          <Text.H3 color="white">H3</Text.H3>
          <Text.H4 color="white">H4</Text.H4>
          <Text.H5 color="white">H5</Text.H5>
          <Text.H6 color="white">H6</Text.H6>
          <Text.Copy color="white">Copy</Text.Copy>
          <Text.CopySmall color="white">CopySmall</Text.CopySmall>
          <Text.Label color="white">Label</Text.Label>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
