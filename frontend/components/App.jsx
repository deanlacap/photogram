import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/signin_container';
import NavBarContainer from './navbar/navbar_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../frontend/util/route_util';

const App = () => (
  <div>
    {/* //components go here!! */}
    {/* <Route path="/:username" component={NavBarContainer} /> */}
    <AuthRoute path="/login" component={LogInContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <ProtectedRoute exact path="/home" component={NavBarContainer} />
  </div>
);

export default App;