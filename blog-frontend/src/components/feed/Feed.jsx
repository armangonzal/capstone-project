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
      //fetchedPosts: [],
      fetchedPosts: [
        {
          id: 3,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "Mr.Title is right",
          hashtags: ["Let's go", "Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
      ],
      sortOption: "Recent",
      newPostContent: {},
    };
    this.handleSortOption = this.handleSortOption.bind(this);
  }

  // componentDidMount() {
  // remote data
  // BlogService.getBlogs().then((res) => {
  //   this.setState({ fetchedPosts: res.data });
  // });
  //   }

  handleSortOption = (e) => {
    this.setState({
      sortOption: e,
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
                {this.state.sortOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.handleSortOption("Top")}>
                  Top
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.handleSortOption("Recent")}>
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
            {this.state.fetchedPosts.map((e) => (
              //   console.log(e.author);

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
    );
  }
}

export default Feed;
