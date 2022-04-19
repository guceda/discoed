import { FC, useEffect } from 'react';
import ThemeProvider from './providers/ThemeProvider';
import CodeEditor from './components/molecules/codeEditor/CodeEditor';
import entries from './__mockdata__/entries';
import Layout from './components/atoms/layout/Layout';
import Divider from './components/atoms/divider/Divider';
import SemanticSearchService from './services/SemanticSearchService';
import List from './components/molecules/list/List';
import './App.css';
import EditorContentProvider from './providers/EditorProvider';

// SELECT COUNT(models) as total_by_brand
const baseQuery = `select brand as car_brand, *,
select cast(year as int) as year_int,
select cast(doors as int) as doors_int
from luxury_cars
`;

const App: FC = () => {
  useEffect(() => {
    console.log('Model: training');
    SemanticSearchService.train(entries)
      .then((res) => console.log(`Model: ${res.status}`))
      .catch((err) => console.log(`Model: ${err}`));
  }, []);

  return (
    <EditorContentProvider>
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
    </EditorContentProvider>
  );
};

export default App;
