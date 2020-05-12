import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <>
        <div>{this.props.counter}</div>
        <button onClick={this.props.addCounter}>+</button>
        <button onClick={this.props.subCounter}>-</button>
      </>
    );
  }
}

export const ADD = 'ADD';
export const SUB = 'SUB';

const addCounter = () => ({type: ADD});

const subCounter = () => ({type: SUB});

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCounter: () => dispatch(addCounter()),
    subCounter: () => dispatch(subCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
