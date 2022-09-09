import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './styles/theme';
import GlobalStyle from "./styles/global";
import AuthProvider from './context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme = {theme}>
        <GlobalStyle/>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
