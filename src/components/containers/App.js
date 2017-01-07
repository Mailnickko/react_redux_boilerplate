import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

class App extends Component {

  constructor() {
    super();

    this.handleInitClick = this.handleInitClick.bind(this);
  }

  handleInitClick() {
    this.props.initApp();
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>

        <button onClick={this.handleInitClick}>Click to check dispatch</button>

        <h3>{ this.props.init }</h3>

        { this.props.children }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    init: state.init.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
