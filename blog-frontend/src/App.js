import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from './components/register/Register';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';

import './App.css';

function App() {
  return (
    // register 
    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {
            !false ?   // user
              <Route path="/">
                <Login />
              </Route> :
              <Route path="/">
                <Header />
                <div className="app_body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </Route>
          }

        </Switch>
      </div>
    </Router>
  );
}

export default App;
