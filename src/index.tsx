import React from 'react';
import ReactDOM from 'react-dom';
import { Routing } from './components/pageRouting/Routing';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { storeProvider, persistor } from './store/StoreProvider';

// public/index.htmlにて<div id="root"></div>の部分で読み取っている。
ReactDOM.render(
  <React.StrictMode>
    {/* reduxストア */}
    <Provider store={storeProvider}>
      <PersistGate loading={null} persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
