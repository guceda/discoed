import './App.css';
import Text from './components/atoms/text/Text';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <Text.H1 color='white'>Hola</Text.H1>
          <Text.H2 color='white'>Hola</Text.H2>
          <Text.H3 color='white'>Hola</Text.H3>
          <Text.H4 color='white'>Hola</Text.H4>
          <Text.H5 color='white'>Hola</Text.H5>
          <Text.H6 color='white'>Hola</Text.H6>
          <Text.Copy color='white'>Hola</Text.Copy>
          <Text.CopySmall color='white'>Hola</Text.CopySmall>
          <Text.Label color='white'>Hola</Text.Label>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
