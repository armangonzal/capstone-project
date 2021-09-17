import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/register/Register';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed.jsx';
import Widgets from './components/widget_s/Widgets';
import Hashtag from './components/hashtag/Hashtag';

import './App.css';

// keep it very basic as CRUD app 
function App() {
  return (
    // register 
    <Router>
      <div className="app">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/feed/hashtag/:hashtag_space_holder" component={Hashtag} />
          {
            !true ?   // user  set false to user in v2 to work on user authentication
              <Route path="/" component={Login} />
              :
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
