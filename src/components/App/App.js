import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from "../Profile/Profile"
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import NotFound  from '../NotFound/NotFound';
import * as MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import {CurrentUserContext} from '../../context/CurrentUserContext'


function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser,  setCurrentUser ] = React.useState({});

  function handleRegisterSubmit(e) {
    e.preventDefault();
    MainApi.register(name, email, password).then((res) => {
      history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    MainApi.authorize(email, password)
    .then((data) => {
      if (data?.token) {
        console.log(data)
        setUserEmail(email)
        history.push('/movies');
        setEmail()
        setPassword()
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !loggedIn){
      MainApi.userEmail(token).then((res) => {
        if (res) {
          setUserName(res.data.name)
          setUserEmail(res.data.email)
          setLoggedIn(true)
          history.push('/movies');
        }
      })
      .catch((err) => console.log(err));
    }
  })

  function handleUpdateUser(info) {
    const token = localStorage.getItem('token');
    MainApi.editUser(info.name, info.email, token)
    .then((result) => {
      setCurrentUser(result.data)
    }
    )
    .catch((err) => console.log(err));
  }

  function signOut(){
    localStorage.removeItem('token');
    history.push('/');
  }

  const ComponentProfile = () => {
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <Profile 
          name={userName} 
          email={userEmail} 
          onClick={signOut} 
          setUserName={setUserName} 
          setUserEmail={setUserEmail} 
          onUpdateUser={handleUpdateUser}
        />
      </CurrentUserContext.Provider>
    )
  }

  const ComponentMovies = () => {
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <Movies />
      </CurrentUserContext.Provider>
    )
  }

  const ComponentSavedMovies = () => {
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <SavedMovies />
      </CurrentUserContext.Provider>
    )
  }
  
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/sign-up">
          <Register 
            handleSubmit={handleRegisterSubmit}
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail} />
        </Route>
        <Route path="/sign-in">
          <Login 
            handleSubmit={handleLoginSubmit}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            buttonText="Войти"/>
        </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={ComponentMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={ComponentSavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={ComponentProfile}
          />
          <Route path="/not-found">
            <NotFound />
          </Route>
        </Switch>
    </div>
  );
  }

export default App;
