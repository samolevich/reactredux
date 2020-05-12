import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return <div>{this.props.counter}</div>;
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
