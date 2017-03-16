import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

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

        <Button
          bsStyle="success"
          onClick={this.handleInitClick}>
          Testing here again?
        </Button>

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
