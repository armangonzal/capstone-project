import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import FlipMove from "react-flip-move";
import { Avatar } from "@material-ui/core";
import BlogService from "../../services/BlogServices";
import default_avatar from "../../static/default_avatar.png";
import Post from "./postRender/Post";
import { Form, Row, Col, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./Feed.css";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //fetchedPosts: [],
      fetchedPosts: [
        {
          id: 2,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "expedita odio, qui laborum reiciendis eligendi",
          hashtags: ["Let's go", "Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
        {
          id: 3,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "incidunt commodi suscipit placeat deserunt",
          hashtags: ["Let's go", "Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
        {
          id: 4,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "Architecto animi velit vel totam",
          hashtags: ["Let's go", "Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
        {
          id: 5,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
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
      postTitle: "",
      postBody: "",
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
      fetchedPosts: this.state.fetchedPosts.sort().reverse(),
    });
  };

  handleAddPost = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  submitNewPost = (e) => {
    e.preventDefault();
    this.state.fetchedPosts.push({
      id: this.getRandomId(),
      author: "Eric Wang",
      title: this.state.postTitle,
      textBody: this.state.postBody,
      hashtags: ["Let's go", "Power Up"],
      dateCreated: this.getCurrentDate(),
      expiration: "9/16/2022",
    });
    this.setState({
      modal: !this.state.modal,
    });
  };
  getCurrentDate = () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    return `${month}/${date}/${year}`;
  };
  getRandomId = () => {
    return uuidv4();
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
                  <Form.Control placeholder="Post subject" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    value={this.state.postTitle}
                    onChange={(e) =>
                      this.setState({ postTitle: e.target.value })
                    }
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Drop your post body here"
                      value={this.state.postBody}
                      onChange={(e) =>
                        this.setState({ postBody: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                type="submit"
                onClick={this.submitNewPost}
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
                <Dropdown.Item onClick={() => this.handleSortOption("Past")}>
                  Past
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
