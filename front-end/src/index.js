import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './home';
import about from './about';
import login from './login.js';
import signup from './signup.js';
import account from './dashboard.js';
import act1 from './act1';
import act2 from './act2';
import act3 from './act3';
import act4 from './act4';
import act5 from './act5';
import act6 from './act6';
import act7 from './act7';
import act8 from './act8';
import act9 from './act9';
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
        <Route path="/act2" exact component={act2}/>
        <Route path="/act3" exact component={act3}/>
        <Route path="/act4" exact component={act4}/>
        <Route path="/act5" exact component={act5}/>
        <Route path="/act6" exact component={act6}/>
        <Route path="/act7" exact component={act7}/>
        <Route path="/act8" exact component={act8}/>
        <Route path="/act9" exact component={act9}/>
        {/* <Route path="home" exact component={Home}/>
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
