import { FC, useEffect } from 'react';
import ThemeProvider from './providers/ThemeProvider';
import CodeEditor from './components/molecules/codeEditor/CodeEditor';
import entries from './mock/entries';
import Layout from './components/atoms/layout/Layout';
import Divider from './components/atoms/divider/Divider';
import SemanticSearchService from './services/SemanticSearchService';
import List from './components/molecules/list/List';
import './App.css';

const baseQuery = `from my.test.holty
select eventdate, cpuSys
select float(cpuSys) as cpuSys_number
groupby 5s 
select count(cpuSys_number) as count`;

const App: FC = () => {
  useEffect(() => {
    console.log('Model: training');
    const train = async () => {
      const res = await SemanticSearchService.train(entries);
      console.log(`Model: ${res.status}`);
    };
    train();
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <Layout>
            <List entries={entries} />
            <Divider />
            <CodeEditor content={baseQuery} />
          </Layout>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
