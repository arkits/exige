import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import 'mobx-react-lite/batchingForReactDom';

// Loading indicator before React loads
const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App hideLoader={hideLoader} showLoader={showLoader} />
    </ThemeProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
