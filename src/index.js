import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './context/globalContext';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
    <GlobalContextProvider>
        <GlobalStyles />
        <App />
    </GlobalContextProvider>, 
    document.getElementById('root')
);
