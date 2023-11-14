// AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp'; // Import your SignUp component
import SignupForm from './SignupForm'; // Import your SignupForm component

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/signup-form" component={SignupForm} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
