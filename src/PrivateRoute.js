import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {actions} from './actions/user'

class PrivateRoute extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.authorizeUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isAuthorized !== this.props.isAuthorized) {
      return prevProps
    }
  }
  render() {
    const {isAuthorized, path, component: Component} = this.props;
    return (
      <Route
        {...path}
        render={props =>
          isAuthorized ? (
            <Component {...props} />
          ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: {from: props.location}
                }}
              />
            )
        }
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authorizeUser: () => dispatch(actions.authorizeUser())
});
const mapStateToProps = ({user}) => {
  return {
    isAuthorized: user.isAuthorized
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)