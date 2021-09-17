import React, { forwardRef } from "react";
import { Avatar } from '@material-ui/core'
import default_avatar from '../../../static/default_avatar.png'
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import "./Post.css"


const Post = forwardRef(({ name, title, description, hashtags, dateCreated }, ref) => {

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
            </div>

            <div className="post_body">
                <p>{description}</p>
            </div>

            <div className="post_footer">
                {
                    hashtags.map(e => <span>#{e}</span>)
                }
            </div>
        </div>
    )

})


export default Post;

// ({ id, data: { author, title, textBody, hashtags, dateCreated }