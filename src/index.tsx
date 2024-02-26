import React from 'react';
import ReactDOM from 'react-dom';
import { Routing } from './components/pageRouting/Routing.tsx';
import reportWebVitals from './reportWebVitals';

// public/index.htmlにて<div id="root"></div>の部分で読み取っている。
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
