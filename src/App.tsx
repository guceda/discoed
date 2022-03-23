import { FC, useEffect } from 'react';
import ThemeProvider from './providers/ThemeProvider';
import CodeEditor from './components/molecules/codeEditor/CodeEditor';
import entries from './mock/entries';
import Layout from './components/atoms/layout/Layout';
import Divider from './components/atoms/divider/Divider';
import SemanticSearchService from './services/SemanticSearchService';
import List from './components/molecules/list/List';
import './App.css';

const baseQuery = `SELECT brand as car_brand, models, doors, year,
SELECT CAST(year AS int) as year_int,
SELECT COUNT(models) as total_by_brand
FROM luxury_cars
`;

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
