import React from 'react';
import Login from './component/Login';
import SignUp from './component/Signup';
import Room from './component/Room';
import Header from './component/Header';
import LoggedInRoute from './LoggedinRoute'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthService';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/signUp'component={SignUp} />
        <Route exact path='/login'component={Login} />
        <LoggedInRoute exact path='/'component={Room} />
      </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
