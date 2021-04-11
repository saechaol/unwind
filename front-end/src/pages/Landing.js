import './styles.css';
import landingBG from '../media/landingBG.svg';
import landingText from '../media/text.svg';
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return(
        <div className="landing">
            <img src={landingBG} alt="landingImage" className="landingBG" />
            <img src={landingText} alt="landingText" className="landingText" />
            <div class="landingAuth">
                <NavLink to="/login">
                    Login
                </NavLink>
                <NavLink to="/signup">
                    Sign Up
                </NavLink>
            </div>
        </div>
    );
};

export default Landing;