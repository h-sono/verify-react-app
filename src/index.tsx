import React from 'react';
import ReactDOM from 'react-dom';
// import '/src/style/index.css';
import { TopPage } from './components/pages/TopPage.tsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TopPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './components/pages/App';
// import reportWebVitals from './reportWebVitals';
// import Top from './components/pages/Top';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Top />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
