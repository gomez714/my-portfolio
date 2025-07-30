import "@mantine/core/styles.css"
import './App.css';
import HomePage from './Pages/HomePage';
import { MantineProvider, createTheme } from '@mantine/core';
import { pdfjs } from "react-pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
