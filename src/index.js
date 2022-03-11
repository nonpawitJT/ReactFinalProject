import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Globalstlyed from './styles/GlobalStlye';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <Globalstlyed />
  <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


