import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/signin_container';
import NavBarContainer from './navbar/navbar_container';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../frontend/util/route_util';
import PostIndexContainer from './post_index/post_index_container';

const App = (props) => {
  // debugger
  return (
  <div>
    <Switch>
      {/* //components go here!! */}
      {/* <Route path="/:username" component={NavBarContainer} /> */}
      <AuthRoute path="/login" component={LogInContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
      <ProtectedRoute path="/" component={PostIndexContainer} />
      <Redirect to="/login" />
    </Switch>
  </div>
)};

export default App;