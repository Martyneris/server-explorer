import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/main.scss';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import authReducer from './state/reducers/authReducer'
import errorsReducer from './state/reducers/errorsReducer'
import serversReducer from './state/reducers/serversReducer'
import appReducer from './state/reducers/appReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  servers: serversReducer,
  app: appReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const dispatch = store.dispatch;

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root'));
serviceWorker.unregister();
