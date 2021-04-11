import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

//redux
import rootReducer from './redux/reducers/rootReducer';
import { useDispatch } from 'react-redux';
import { loginUser } from "./redux/actions";

const axios = require("axios");
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.post('http://localhost:5000/api/post/auth').then(res => {
      if (res.data.success) {
        dispatch(loginUser(res.data.user));
      }
    });
  },[]);
  return (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home}/>
        <Route exact path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup}/>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
