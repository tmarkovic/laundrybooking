import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./actions/user";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.authenticateUser({ ...this.state });
  };
  render() {
    return (
      <div className="w-full m-auto max-w-xs mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={this.handleInputChanged}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="user@domain.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={this.handleInputChanged}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={this.handleSubmit}
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.user });

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: ({ email, password }) => {
      dispatch(actions.authenticateUser({ email, password }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
