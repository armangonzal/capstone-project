import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import FlipMove from "react-flip-move";

import BlogService from "../../services/BlogServices";
import Post from "./postRender/Post";
import "./Feed.css";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPosts: {},
      sortOption: "Recent",
      newPostContent: {},
    };
  }

  componentDidMount() {
    BlogService.getBlogs()
    .then(res => {
        let posts = res.data
        this.set(
            posts.map(
                p => (
                    {
                        id: p.post_id,
                        author: p.author,
                        title: p.title,
                        textBody: p.textBody,
                        hashtags: p.hashtags,
                        dateCreated: p.dateCreated,
                        expiration: p.expiration
                    }
                )
            )
        )
        })
    this.setState((prevState) => ({
      fetchedPosts: [
        ...prevState.fetchedPosts,
        {
          // temporary data
          id: 3,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "Mr. Title is correct",
          hashtags: "Let's go ",
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
      ],
    }));
  }

  handleSortOption = (event) => {
    this.setState({
      sortOption: event.target.value,
    });
  };

  render() {
    return (
      <div className="feed">
        {/*  Space reserved for txt editor */}
        <div className="feed_separationLine">
          <hr className="feed_horizontal" />
          <span className="feed_sorts">
            <span className="feed_sort">Sort by:</span>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="feed_dropDown"
              >
                {this.sortOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => this.handleSortOption("top")}>
                  Top
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => this.handleSortOption("recent")}>
                  Recent
                </Dropdown.Item>
                {/* <Dropdown.Item >Top</Dropdown.Item>
                            <Dropdown.Item>Recent</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </div>

        <div className="feed_posts">
          <FlipMove>
            {
              //console.log(this.fetchedPosts.length)
              // fetchedPosts.map(({ id, data: { author, title, textBody, hashtags, dateCreated } }) => (
              //     <Post
              //         key={id}
              //         name={author}
              //         title={title}
              //         description={textBody}
              //         hashtags={hashtags}
              //         photoUrl={dateCreated}
              //     />
              // ))
            }
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default Feed;
