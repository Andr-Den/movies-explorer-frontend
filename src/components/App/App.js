import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from "../Profile/Profile"
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import NotFound  from '../NotFound/NotFound';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        </Switch>
    </div>
  );
  }

export default App;
