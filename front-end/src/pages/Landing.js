import './styles.css';
import landingBG from '../media/landingBG.svg';
import landingText from '../media/text.svg';
import { Button } from 'react-bootstrap';

const Landing = () => {
    return(
        <div className="landing">
            <img src={landingText} alt="landingText" className="landingText" />
            <div class="landingAuth">
                <Button className="buttons" variant="light" href="/login">
                    Login
                </Button>
                <Button className="buttons" variant="light" href="/signup">
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default Landing;