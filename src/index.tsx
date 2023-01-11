import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './app';
import theme from './styles/theme';
import './index.css';

export const tmep = {};

export function Index() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById('root') || document.createElement('div'),
);
