import React, { Component } from "react";
import BlogServices from "../../services/BlogServices";
import FlipMove from "react-flip-move";
import "./Hashtag.css"
import default_avatar from '../../static/default_avatar.png'
import { Avatar } from "@material-ui/core";
import Post from '../feed/postRender/Post'

// "/feed/hashtag/:hashtag"
class Hashtag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hashtag: this.props.match.params.hashtag,
            blogs: [
                {
                    id: 2,
                    author: "Eric Wang",
                    title: "Challenge makes life interesting",
                    textBody: "expedita odio, qui laborum reiciendis eligendi",
                    hashtags: ["Power Up"],
                    dateCreated: "9/16/2021",
                    expiration: "9/16/2022",
                },
                {
                    id: 3,
                    author: "Eric Wang",
                    title: "Challenge makes life interesting",
                    textBody: "incidunt commodi suscipit placeat deserunt",
                    hashtags: ["Power Up"],
                    dateCreated: "9/16/2021",
                    expiration: "9/16/2022",
                },
                {
                    id: 4,
                    author: "Eric Wang",
                    title: "Challenge makes life interesting",
                    textBody: "Architecto animi velit vel totam",
                    hashtags: ["Power Up"],
                    dateCreated: "9/16/2021",
                    expiration: "9/16/2022",
                },
            ]
        }
    }

    componentDidMount() {
        // BlogServices.getBlogsByHashtag(this.hashtag)          // end point 
        //     .then((res) => {
        //         this.setState({ blogs: res.data })
        //     })
    }
    render() {
        return (
            <div className="hashtag">

                <div className="post">
                    <Avatar src={"data:image/png;base64,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"} alt="userProfile"></Avatar>
                    <div className="post_info">
                        <p> {this.state.hashtag}</p>
                    </div>


                    <div className="feed_posts">
                        <FlipMove>
                            {this.state.blogs.map((e) => (
                                <Post
                                    key={e.id}
                                    name={e.author}
                                    title={e.title}
                                    description={e.textBody}
                                    hashtags={e.hashtags}
                                    dateCreated={e.dateCreated}
                                />
                            ))}
                        </FlipMove>
                    </div>
                </div>

                {/* <div className="feed_inputContainer">
                    <div className="feed_info">


                        <Avatar
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4Y3IwCw4E0DPfyyllhdQGolTVMKuTDHgQQ&usqp=CAU"}
                            alt="personal profile image"
                            className="feed_icon"
                        >

                        </Avatar>
                        {this.state.hashtag}
                        {"                                            "}

                        <div className="feed_inputOptions"></div>
                    </div>
                </div> */}
            </div >
        )
    }
}

export default Hashtag;


/*

     getBlogsByHashtag(hashtag) {
        return axios.get(BLOG_API_BASE_URL, '/blog/' + hashtag);
    }

     // BlogService.getBlogs().then((res) => {
    //   this.setState({ fetchedPosts: res.data });
    // });
*/