import { Avatar } from '@material-ui/core'
// import { Dropdown, } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap';
import default_avatar from '../../../static/default_avatar.png'
import "./HeaderOption.css"


function HeaderOption({ Icon, avatar, dropdown, onClick, title }) {

    const user = {
        photoUrl: default_avatar,
        email: "eric@skydream.com",
        displayName: "Eric"
    }
    return (

        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}

            {avatar &&
                <Avatar className="headerOption_icon" src={user?.photoUrl} >
                    {user?.email[0]}
                </Avatar>
            }
            {
                dropdown ?
                    <div className="headerOption_dropdown">
                        <Dropdown >
                            {title &&
                                <Dropdown.Toggle >
                                    {user?.displayName}
                                </Dropdown.Toggle>
                            }
                            <Dropdown.Menu>
                                <div className="headerOption_menu">
                                    <h6>Account</h6>

                                    <Dropdown.Item href="#">Posts & Activity</Dropdown.Item>
                                    <Dropdown.Item href="#">Setting & Privacy</Dropdown.Item>
                                    <Dropdown.Item href="#">Language</Dropdown.Item>
                                    <Dropdown.Item href="#">Help</Dropdown.Item>


                                    <Dropdown.Item onClick={onClick}>Sign out</Dropdown.Item>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    :
                    (
                        <span className="headerOption_title">{title}</span>
                    )
            }


        </div>
    )
}

export default HeaderOption;