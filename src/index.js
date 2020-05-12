import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ADD, SUB } from './App';

const initialState = { counter: 110 };

const reducer = (state = initialState, { type }) => {
  switch (type) {

  case ADD:
    return {counter: state.counter + 1}

  case SUB:
    return {counter: state.counter - 1}

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
