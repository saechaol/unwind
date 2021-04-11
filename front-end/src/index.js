import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './home';
import about from './about';
import login from './login.js';
import signup from './signup.js';
import account from './dashboard.js';
import act1 from './act1';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'; 



import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route} from "react-router-dom";



// Pages
// import Landing from './pages/Landing';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';


const App = () => {
  return (
  <BrowserRouter>
  <Route render={({location}) => (
    <TransitionGroup>
    <CSSTransition
      key = {location.key}
      timeout={550}
      classNames="fade"
      >
    <Switch location={location}>
        <Route path="/" exact component={home}/>
        <Route path="/about" exact component={about}/>
        <Route path="/login" exact component={login}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/account" exact component={account}/>
        <Route path="/act1" exact component={act1}/>
        {/* <Route path="/home" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/> */}

      </Switch>
      </CSSTransition>
  </TransitionGroup>
  )}/>
  
      
    </BrowserRouter>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
