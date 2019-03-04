import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/signin_container';
import NavBarContainer from './navbar/navbar_container';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../frontend/util/route_util';
import PostIndexContainer from './post_index/post_index_container';

const App = () => (
  <div>
    <Switch>
      {/* //components go here!! */}
      {/* <Route path="/:username" component={NavBarContainer} /> */}
      <ProtectedRoute path="/home" component={PostIndexContainer} />
      <AuthRoute path="/login" component={LogInContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
      <Redirect to="/login" />
    </Switch>
  </div>
);

export default App;