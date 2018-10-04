import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//se manda a llamar componentes de redux, createStore: crea una mega store, applyMiddleware: utiliza para poner todos los middleware posibles antes de reduxes
import  { createStore, applyMiddleware } from 'redux';
//encargado de conectar react con redux
import { Provider } from 'react-redux';
// instalado para tener un control sobre las rutas
import  createHistory  from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';

const history = createHistory();
const middleware = [routerMiddleware(history), thunk];
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store= { store }>
      <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
