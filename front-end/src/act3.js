import './act.css';
import NavBar from './Nav.js';
import logo from './unwind_icon.png';
import { NavLink } from 'react-router-dom';


function actcompleted() {
  return (
    <div className="actcompleted">
        <NavBar/>
        <p>
          welcome, name 
        </p>

        <div id="row1">
        <NavLink to="/act1">
          <button type="button act1" id="act1" >take a walk
          </button>
        </NavLink>
        <NavLink to="/act2">
          <button type="button act2" id="act2">write your thoughts in a journal</button>
        </NavLink>
        <NavLink to="/act3">
          <button type="button act3" id="act3">(4/11/21): meditated for 15 min</button>
        </NavLink>
        </div>
        
        <div id = "row2" >
        <NavLink to="/act4">
          <button type="button act4" id="act4" >organize your living space</button>
        </NavLink>
        <NavLink to="/act5">
          <button type="button act5" id="act5">catch up with a friend</button>
        </NavLink>
        <NavLink to="/act6">
          <button type="button act6" id="act6">cook a snack/meal for yourself</button>
        </NavLink>
        </div>

        <div id="row3">
        <NavLink to="/act7">
          <button type="button act7" id="act7" >take a walk</button>
        </NavLink>
        <NavLink to="/act8">
          <button type="button act8" id="act8">write your thoughts in a journal</button>
        </NavLink>
        <NavLink to="/act9">
          <button type="button act9" id="act9">meditate for 15 min</button>
        </NavLink>
        </div>
        
    </div>
  );
}

export default actcompleted;
