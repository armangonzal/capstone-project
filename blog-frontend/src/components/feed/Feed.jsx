import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import FlipMove from "react-flip-move";
import { Avatar } from "@material-ui/core";
import BlogService from "../../services/BlogServices";
import default_avatar from "../../static/default_avatar.png";
import Post from "./postRender/Post";
import { Form, Row, Col, Button } from "react-bootstrap";
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
          textBody: "Yolo~~~~~~~~~~~~~~~",
          hashtags: ["Let's go", "Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
        {
          id: 3,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "Yolo~~~~~~~~~~~~~~~",
          hashtags: ["Let's go", "Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
        {
          id: 3,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "Yolo~~~~~~~~~~~~~~~",
          hashtags: ["Let's go", "Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
        {
          id: 3,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "Yolo~~~~~~~~~~~~~~~",
          hashtags: ["Let's go", "Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
      ],
      sortOption: "Recent",
      newPostContent: {},
      user: {
        photoUrl: default_avatar,
        email: "eric@skydream.com",
        displayName: "Eric",
      },
      modal: false,
    };
    this.handleSortOption = this.handleSortOption.bind(this);
  }

  // used to connecting to backend data
  componentDidMount() {
    //remote data
    // BlogService.getBlogs().then((res) => {
    //   this.setState({ fetchedPosts: res.data });
    // });
  }

  handleSortOption = (e) => {
    this.setState({
      sortOption: e,
    });
  };

  handleAddPost = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  submitNewPost = (e) => {
    e.preventdefault();
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <div className="feed">
        <div className="feed_inputContainer">
          <div className="feed_info">
            <Avatar
              src={this.state.user?.photoUrl}
              alt="personal profile image"
              className="feed_icon"
            >
              {this.state.user?.email[0]}
            </Avatar>
            <div
              className="feed_input modal_container"
              onClick={this.handleAddPost}
            >
              <p> Start a post</p>
            </div>

            <div className="feed_inputOptions"></div>
          </div>
        </div>

        {this.state.modal && (
          <div className="modal-content">
            <p>Create a post</p>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="Message Subject" o />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Drop your message here"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                type="submit"
                onClick={this.state.handleAddPost}
                className="sendPostBtn"
              >
                Send Post
              </Button>
            </Form>
          </div>
        )}
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
