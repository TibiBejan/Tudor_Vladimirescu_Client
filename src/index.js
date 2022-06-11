import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import axios from 'axios';
import App from './App';
// Redux
import { Provider } from 'react-redux';
import {store} from './app/store';
// Styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './themes/GlobalStyles';
import Theme from './themes/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
// axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

root.render(
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
