import { useHistory } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import HeaderOption from './headerOption/HeaderOption.js';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../../static/logo.png';
import "./Header.css"

function Header() {
    const history = useHistory();

    const logoutFromApp = (e) => {
        e.preventDefault();
        /* save for BLOG 2.0  -> call reducer to log user out */
        history.push("/login")    // redirect user to login page 
    }
    return (
        <div className="header">
            <div className="header_left">
                <img src={logo}
                    alt="blogIcon" />
                <div className="header_saveForAnotherFeature" />
            </div>


            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar={true} title="me" dropdown={true} onClick={logoutFromApp} />
            </div>

        </div>
    )
}

export default Header;