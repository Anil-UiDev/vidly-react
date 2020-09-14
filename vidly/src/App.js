import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Movies from './movies/movies';
import Customers from './component/customers';
import Rentals from './component/rentals';
import NotFound from './component/notFound';
import NavBar from './component/navBar';
import MovieForm from './component/movieForm';
import LoginForm from './component/loginForm';
import RegisterForm from './component/registerForm';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
