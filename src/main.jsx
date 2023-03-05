import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import '@fontsource/open-sans';
import '@fontsource/poppins';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        primaryColor: 'grape',
        primaryShade: 6,
        cursorType: 'pointer',
        fontFamily: 'Open Sans, sans-serif',
        headings: { fontFamily: 'Poppins, sans-serif' },
        fontSizes: {
          xs: 16,
          sm: 18,
          md: 20,
          lg: 22,
          xl: 26,
        },
      }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
