import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Routes from './Routes';
import '../assets/stylesheets/main.scss';
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(thunk));

// FOR DEV ONLY
store.subscribe(() => {
  console.log("store updated", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
