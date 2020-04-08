import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/container'
import Login from './containers/Login/container'
import ServersList from './containers/ServersList/container'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/servers" component={ServersList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
