import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/signin_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    {/* //components go here!! */}
    <Route path="/login" component={LogInContainer} />
    <Route path="/signup" component={SignUpContainer} />
  </div>
);

export default App;