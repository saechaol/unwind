import React, { useState,} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useSelector, useDispatch} from 'react-redux';
import { loginUser } from '../redux/actions';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import title from '../media/text.svg';

const Signup = () => {
    const isLoggedIn = useSelector(state=>state.userReducer.isLoggedIn);
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        axios.post('https://citrushack-310405.wl.r.appspot.com/api/post/register', user)
        .then(response => {
            if(response.data.success){
                dispatch(loginUser(response.data.user))
            }else{
                alert("Incorrect credentials")
            }
        })
        .catch(error => {
            console.log(error)
        });
    }

    return(
        <div className="signup">
            {isLoggedIn && <Redirect to="/home" />}
            <img src={title} alt="landingText" className="signupTitle" />
            <form className="signupForm">
                <label>
                    <p>First Name:</p>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required/>
                </label>
                <label>
                    <p>Last Name:</p>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required/>
                </label>
                <label>
                    <p>Email Address:</p>
                    <input type="email" name="email" value={user.email} onChange={handleChange} required/>
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" name="password" value={user.password} onChange={handleChange} required/>
                </label>
                <div className="signupButton">
                    <Button variant="dark" onClick={handleSignUp}>Signup</Button>
                </div>
            </form>
        </div>
    );
};
export default Signup;