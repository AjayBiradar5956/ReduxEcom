import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux';
import { product } from './reducers';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

const store = createStore(product);
console.log("Before", store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={5000} placement='top-left'>
      <Provider store={store}>
        <App />
      </Provider>
    </ToastProvider>
  </React.StrictMode>
);