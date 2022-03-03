import { FC } from 'react';
import './App.css';
import Text from './components/atoms/text/Text';
import EntryList from './components/molecules/entryList/EntryList';
import ThemeProvider from './providers/ThemeProvider';

const entries = [
  {
    command: 'command0',
    params: ['param1', 'param2'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k,This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k,This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k,This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
  {
    command: 'command1',
    params: ['param1'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
  {
    command: 'command2',
    params: ['param1', 'param2'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
  {
    command: 'command3',
    params: ['param1', 'param2'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
  {
    command: 'command4',
    params: ['param1'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
  {
    command: 'command5',
    params: ['param1', 'param2'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
  {
    command: 'command6',
    params: ['param1', 'param2'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
  {
    command: 'command7',
    params: ['param1'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
  {
    command: 'command8',
    params: ['param1', 'param2'],
    description:
      'This is the first command that you will ever see in your life. It is beautiful and at the same time interesting as f**k',
  },
];

const App: FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <EntryList entries={entries} />
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
