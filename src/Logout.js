import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./actions/user";

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = ({ router }) => ({ ...router });

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
