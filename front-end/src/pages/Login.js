import './styles.css';
import React from 'react';
import title from '../media/text.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../redux/actions';


const Login = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://citrushack-310405.wl.r.appspot.com/api/post/auth', user)
        .then(res => {
            if(res.data.success) {
                dispatch(loginUser(res.data.user));
            }
            else {
                alert('Invalid email or password');
            }
        });
    }

    return(
        <div className="login">
            {isLoggedIn && (
            <Redirect to="/home" /> 
            )}
            <div className="loginLeft">
                <img src={title} alt="landingText" className="loginTitle" />
            </div>
            <div className="loginRight">
                <p className="vertical">welcome to unwind</p>
                <form className="loginForm">
                    <label className="label">
                        <p>email:</p>
                        <input type="email" name="email" value={user.email} onChange={handleChange} required/>
                    </label>
                    <label className="label">
                        <p>password:</p>
                        <input type="password" name="password" value={user.password} onChange={handleChange} required />
                    </label>
                    <div className="loginButton">
                        <Button className="loginButton" variant="dark" onClick={handleLogin}>log in</Button>
                    </div>
                </form>
                <p className="vertical">New to Unwind? <a href="/signup"><u> Create Account </u></a></p>
            </div>
        </div>
    );
};
export default Login;
