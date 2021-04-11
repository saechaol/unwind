import './styles.css';
import NavBar from './Nav.js';
import logo from './unwind_icon.png';
import { NavLink } from 'react-router-dom';


function home() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
          <div id="containertop">

          <NavLink to="/about">
          <button type="button about" id="button_about">about</button>
          </NavLink> 
          <NavLink to="/account">
          <button type="button account" id="button_account">account</button>
          </NavLink>            
        </div>
          </p>
      </header>
        <p>
          unwind 
        </p>
        <div id="container">
        <NavLink to="/login">
          <button type="button logon-button" id="button_logon" >log in</button>
        </NavLink>
        <NavLink to="/signup">
          <button type="button signup-button" id="button_signup">sign up</button>
        </NavLink>
            
        </div>
    </div>
  );
}

export default home;
