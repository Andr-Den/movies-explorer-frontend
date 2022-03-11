import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        </Switch>
    </div>
  );
  }

export default App;
