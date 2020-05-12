import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.subRandom}>R-</button>
        <button onClick={this.props.subCounter}>-</button>
        <button onClick={this.props.addCounter}>+</button>
        <button onClick={this.props.addRandom}>R+</button>
      </>
    );
  }
}

export const ADD = 'ADD';
export const SUB = 'SUB';
export const ADD_RANDOM = 'ADD_RANDOM';
export const SUB_RANDOM = 'SUB_RANDOM';
const randomNumber = Math.floor(Math.random() * 10);
const addCounter = () => ({type: ADD});
const subCounter = () => ({type: SUB});
const addRandom = () => ({type: ADD_RANDOM, payload: randomNumber});
const subRandom = () => ({type: SUB_RANDOM, payload: randomNumber});

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCounter: () => dispatch(addCounter()),
    subCounter: () => dispatch(subCounter()),
    addRandom: randomNumber => dispatch(addRandom(randomNumber)),
    subRandom: randomNumber => dispatch(subRandom(randomNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
