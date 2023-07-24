import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux';
import { cart } from './reducers';
import { Provider } from 'react-redux';

const store = createStore(cart);
console.log("Before", store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);