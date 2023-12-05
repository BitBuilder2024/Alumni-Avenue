import { Link } from 'react-router-dom';
import '.././HomeScreen/HomeScreen.css'
import './HeadCard.css';

function HeadCard(props) {
    return (
        <div className="homeHeader">
            <Link to='/HomeScreen'>
                <img className="homeLogo" src='/AlumAveLogo.png' alt="Alumni Avenue Logo"/>
            </Link>
            <div className="header">Alumni Avenue</div>
            <div className="button-container">
                <Link to='/Components/Signup'>
                    <button className="ProfileButton">Profile</button>
                </Link>
                <Link to='/'>
                    <button className="SignOutButton">Sign Out</button>
                </Link>
            </div>
        </div>
    );
}

export default HeadCard;
