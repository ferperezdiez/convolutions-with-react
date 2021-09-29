import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios'
import store from './redux/store.jsx';
import dotenv from 'dotenv';
import 'bootstrap/dist/css/bootstrap.min.css';
dotenv.config()
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3004'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  

 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

