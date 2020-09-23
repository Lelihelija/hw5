import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Gallery from './gallery/gallery.js';
import Header from './header/header.js';
import Main from './main/main.js';
import Contacts from './contacts/contacts.js';
import Posts from './posts/posts.js';
import {HashRouter as Router,Switch, Route, Redirect} from "react-router-dom";

export const headerMenu = [{
  title: "Головна",
  path: "/main",
  component: Main,
  exact: true,
  index: 1,
}, {
  title: "Контакти",
  path: "/contacts",
  component: Contacts,
  exact: true,
  index: 2,
}, {
  title: "Галерея",
  path: "/gallery",
  component: Gallery,
  exact: true,
  index: 3,
}, {
  title: "Пости",
  path: "/posts",
  component: Posts,
  exact: true,
  index: 4,
}
];

function App() {
  return (
    <div className="App">
      <Router> 
        <Header/>
        <div className="content-container">
          <nav>
            <div className="content-wrapper">
              <Switch>
                {headerMenu.map(({path, component, index, exact = false}) => (
                  <Route path={path} exact={exact} key={index} component={component}/>      
                ))}
              </Switch>
              
              <Route path="/" exact render={() => <Redirect to="/main"/>}/>
              <Route exact render={() => <Redirect to="/main"/>}/>
            </div>    
          </nav>
        </div>  
      </Router>    
      
    </div>
  );
}

export default App;
