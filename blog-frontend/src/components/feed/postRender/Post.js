import React, { forwardRef } from "react";
import { Avatar } from '@material-ui/core'
import default_avatar from '../../../static/default_avatar.png'
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import { Dropdown } from "react-bootstrap";
// import Sidebar from "../../sidebar/Sidebar";
import { v4 as uuidv4 } from 'uuid';
import "./Post.css"


const Post = forwardRef(({ name, title, description, hashtags, dateCreated }, ref) => {
    // function handleHashTag(e) {
    // }
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={default_avatar} alt="userProfile">{name && name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <p>{dateCreated}</p>
                </div>
                <MoreHorizSharpIcon className="post__threeDot" />
                {/* <div className="dropdown">
                    <MoreHorizSharpIcon className="post__threeDot" />
                    <div id="myDropdown" className="dropdown-content">
                        <a>Edit</a>
                        <a>Delete</a>
                    </div>
                </div> */}
            </div>

            <div className="post_body">
                <p>{description}</p>
            </div>

            {hashtags.length !== 0 &&
                (
                    <div className="post_footer">
                        {
                            hashtags.map(e =>
                                <span key={uuidv4().substr(0, 4)}> #{e}</span>
                            )
                        }
                        {/* {
                            hashtags.map(e => <Sidebar hashDetail={e} />)
                        } */}


                    </div>
                )
            }
        </div>
    )

})


export default Post;

// ({ id, data: { author, title, textBody, hashtags, dateCreated }