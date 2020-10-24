import React from 'react';
import { Switch } from 'react-router-dom';
import Cadastro from '../pages/cadastro';
import Favoritos from '../pages/favoritos';
import Home from '../pages/home';
import Login from '../pages/login';
import Search from '../pages/search';
import Route from './authRoute';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/Home" component={Home} />
    <Route path="/search" component={Search} isPrivate />
    <Route path="/Login" component={Login} />
    <Route path="/Cadastro" component={Cadastro} />
    <Route path="/Favoritos" component={Favoritos} isPrivate />
  </Switch>
);

export default Routes;
