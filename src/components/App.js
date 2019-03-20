import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { post } = this.props;
    console.log(post);
    return <div className="App" />;
  }
}

const mapStateToProps = state => ({
  post: state,
});

App.propTypes = {
  post: PropTypes.array,
};
export default connect(mapStateToProps)(App);
