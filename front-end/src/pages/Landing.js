import './styles.css';
import landingBG from '../media/landingBG.svg';

const Landing = () => {
    return(
        <div className="landing">
            <img src={landingBG} alt="landingImage" className="landingBG" />
        </div>
    );
};

export default Landing;