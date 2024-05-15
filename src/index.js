import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import { ContextProvider } from './contexts/ContextProvider.js'

import './index.css';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>, document.getElementById('root'));