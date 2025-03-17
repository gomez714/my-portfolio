import "@mantine/core/styles.css"
import './App.css';
import HomePage from './Pages/HomePage';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    primaryColor: ['#64FFDA', '#64FFDA', '#64FFDA', '#64FFDA', '#64FFDA', '#64FFDA', '#64FFDA', '#64FFDA', '#64FFDA', '#64FFDA'],
  },
  breakpoints: {
    'xs': '320px',
    'sm': '476px',
    'md': '640px',
    'bs': '768px',
    'lg': '900px',
    'xl': '1024',
    '2xl': '1280',
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
