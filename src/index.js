import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ADD, SUB, SUB_RANDOM, ADD_RANDOM } from './App';

const initialState = { counter: 0 };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return {counter: state.counter + 1}

  case SUB:
    return {counter: state.counter - 1}

  case ADD_RANDOM:
    return {counter: state.counter + payload}

  case SUB_RANDOM:
    return {counter: state.counter - payload}

  default:
    return state
  }
}


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
