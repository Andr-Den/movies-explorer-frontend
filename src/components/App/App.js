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
import InfoTooltip from '../InfoToolTip/InfoTooltip';


function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser,  setCurrentUser ] = React.useState({});
  const [popupErrorOpen, setPopupErrorOpen] = React.useState(false);
  const [tooltipErrorText, setTooltipErrorText] = React.useState(false);

  function handleRegisterSubmit(e) {
    e.preventDefault();
    MainApi.register(name, email, password)
    .then((data) => {
      if (data?.token) {
      setLoggedIn(true);
      setCurrentUser(data)
      setName();
      setEmail()
      setPassword()
      history.push('/movies');
    }
      })
      .catch((error) => {
        if (error === 'Ошибка: 409') {
          setTooltipErrorText('Пользователь с таким email уже существует');
        }
        setPopupErrorOpen(true)
      });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    MainApi.authorize(email, password)
    .then((data) => {
      if (data?.token) {
        history.push('/movies');
        setEmail()
        setPassword()
      }
    })
    .catch((error) => {
      if (error === 'Ошибка: 401') {
        setTooltipErrorText('Неправильные почта или пароль');
      }
      setPopupErrorOpen(true)
    });
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !loggedIn){
      MainApi.getUser(token).then((res) => {
        if (res) {
          setCurrentUser(res.data)
          setLoggedIn(true)
          history.push('/movies');
        }
      })
      .catch((error) => console.log(error)
      );
    }
  })

  function handleUpdateUser(info) {
    const token = localStorage.getItem('token');
    MainApi.editUser(info.name, info.email, token)
    .then((result) => {
      setCurrentUser(result.data)
    }
    )
    .catch((error) => {
      if (error === 'Ошибка: 409') {
        setTooltipErrorText('Пользователь с таким email уже существует');
      }
      setPopupErrorOpen(true)
    });
  }

  function signOut(){
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  }

  function popupErrorClose() {
    setPopupErrorOpen(false)
  }

  const ComponentProfile = () => {
    return (
      <CurrentUserContext.Provider value={currentUser}>
        <Profile 
          onClick={signOut} 
          onUpdateUser={handleUpdateUser}
        />
        <InfoTooltip popupOpen={popupErrorOpen} tooltipErrorText={tooltipErrorText} popupClose={popupErrorClose}/>
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
          <Main loggedIn={loggedIn}/>
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
          <InfoTooltip popupOpen={popupErrorOpen} tooltipErrorText={tooltipErrorText} popupClose={popupErrorClose}/>
        </Route>
        <Route path="/sign-in">
          <Login 
            handleSubmit={handleLoginSubmit}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            buttonText="Войти"/>
          <InfoTooltip popupOpen={popupErrorOpen} tooltipErrorText={tooltipErrorText} popupClose={popupErrorClose}/>
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
