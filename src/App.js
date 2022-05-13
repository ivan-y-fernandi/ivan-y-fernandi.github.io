import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './style';
import { MainPage} from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
       <MainPage />
    </ThemeProvider>
  );
}

export default App;
