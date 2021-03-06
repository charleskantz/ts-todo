import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import 'reset-css';

// app-wide styling
const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(36, 36, 38);
    font-family: 'Open Sans', sans-serif;
    color: white;
  }
  #root {
    z-index: -2;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
