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
          id: 1,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "Not sure if this is correct, just another testing",
          hashtags: ["Power Up"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
        {
          id: 2,
          author: "Eric Wang",
          title: "Challenge makes life interesting",
          textBody: "New Bug",
          hashtags: ["Creative"],
          dateCreated: "9/16/2021",
          expiration: "9/16/2022",
        },
      ],
      sortOption: "Top",
      newPostContent: {},
      user: {
        photoUrl: default_avatar,
        email: "eric@skydream.com",
        displayName: "Eric",
      },
      modal: false,
      postTitle: "",
      postBody: "",
      hashtags: "",
      nPostTitle: "",
      nPostBody: "",
      nHashtags: "",
      modal2: false,
      modal3: false,
      target: -1,
    };
    this.handleSortOption = this.handleSortOption.bind(this);
  }

  // uncomment  this line to connect to backend server    REST end point
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

  handleAddOrCancelPost = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  submitNewPost = (e) => {
    e.preventDefault();
    this.state.fetchedPosts.push({
      id: this.getRandomId().substr(0, 5),
      author: "Eric Wang",
      title: this.getTitle(),
      textBody: this.getBody(),
      hashtags: this.parseHashtag(),
      dateCreated: this.getCurrentDate(),
      expiration: "9/16/2022",
    });

    // uncomment  this line to connect to backend server         REST end point

    // BlogService.postNewPost({
    //   id: this.getRandomId().substr(0, 5),
    //   author: "Eric Wang",
    //   title: this.getTitle(),
    //   textBody: this.getBody(),
    //   hashtags: this.parseHashtag(),
    //   dateCreated: this.getCurrentDate(),
    //   expiration: "9/16/2022",
    // });

    this.setState({
      modal: !this.state.modal,
      modal2: !this.state.modal2,
      modal3: !this.state.modal3,
      postTitle: "",
      postBody: "",
      hashtags: "",
      nPostTitle: "",
      nPostBody: "",
      nHashtags: "",
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
  getTitle = () => {
    return this.state.postTitle;
  };
  getBody = () => {
    return this.state.postBody;
  };
  parseHashtag = () => {
    return this.state.hashtags.split("#").filter((e) => e.length > 0);
  };

  deleteAPost = () => {
    let temp = this.target;
    this.setState({
      fetchedPosts: this.state.fetchedPosts.filter((e) => e.id !== temp),
    });
  };
  editAPost = () => {
    this.setState({
      modal3: !this.state.modal3,
    });
  };

  finshEditingPost = () => {
    // let temp = this.target;
    // let data = this.state.fetchedPosts.filter((e) => e.id === temp);
    // this.setState({
    //   fetchedPosts: this.state.fetchedPosts.filter((e) => e.id !== temp),
    // });
    // console.log("yo");
    // if (this.nPostTitle !== "") {
    //   data.title = this.nPostTitle;
    // }
    // if (this.nPostBody !== "") {
    //   data.textBody = this.nPostBody;
    // }
    // if (this.nHashtags !== "") {
    //   data.hashtags = this.parsenHashtag();
    // }
    // data.dateCreated = this.getCurrentDate();
    // this.state.fetchedPosts.push(data);
  };
  cancelForModal3 = () => {
    this.setState({
      modal3: !this.state.modal3,
    });
  };
  handleDeleteAndEdit = (id) => {
    this.setState({
      modal2: !this.state.modal2,
      target: id,
    });
  };
  parsenHashtag = () => {
    return this.state.nHashtags.split("#").filter((e) => e.length > 0);
  };

  cancalAction = () => {
    this.setState({
      modal2: !this.state.modal2,
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
              onClick={this.handleAddOrCancelPost}
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
                  <Form.Control
                    placeholder="Post subject"
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    value={this.state.postTitle}
                    onChange={(e) =>
                      this.setState({ postTitle: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Drop your post body here"
                    value={this.state.postBody}
                    onChange={(e) =>
                      this.setState({ postBody: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Add hashtags  (ex:  #softwareengineering #programming #coding)"
                    value={this.state.hashtags}
                    onChange={(e) =>
                      this.setState({ hashtags: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <br />
              <div className="form-bot">
                <Button
                  type="submit"
                  onClick={this.submitNewPost}
                  className="sendPostBtn"
                >
                  Send Post
                </Button>
                <Button
                  type="cancel"
                  onClick={this.handleAddOrCancelPost}
                  className="sendPostBtn"
                >
                  Cancel{"  "}
                </Button>
              </div>
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
              <Post
                key={e.id}
                id={e.id}
                name={e.author}
                title={e.title}
                description={e.textBody}
                hashtags={e.hashtags}
                dateCreated={e.dateCreated}
                handleDeleteAndEdit={this.handleDeleteAndEdit}
              />
            ))}
          </FlipMove>
          {this.state.modal2 && (
            <div className="modal-content">
              <Form>
                <p>Do you want to delete a post, edit a post, or exit ??</p>
                <br />
                <div className="form-bot">
                  <Button
                    type="submit"
                    onClick={this.deleteAPost}
                    className="sendPostBtn"
                  >
                    Delete
                  </Button>
                  <Button
                    type="submit"
                    onClick={this.editAPost}
                    className="sendPostBtn"
                  >
                    Edit
                  </Button>

                  <Button
                    type="cancel"
                    onClick={this.cancalAction}
                    className="sendPostBtn"
                  >
                    Cancel{"  "}
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {this.state.modal3 && (
            <div className="modal-content">
              <p>Editing a post</p>
              <Form>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="Re-editing post subject"
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                      value={this.state.nPostTitle}
                      onChange={(e) =>
                        this.setState({ nPostTitle: e.target.value })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Re-editing post body "
                      value={this.state.nPostBody}
                      onChange={(e) =>
                        this.setState({ nPostBody: e.target.value })
                      }
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows={1}
                      placeholder="Re-editing or keep it as default"
                      value={this.state.nhashtags}
                      onChange={(e) =>
                        this.setState({ nhashtags: e.target.value })
                      }
                    />
                  </Col>
                </Row>
                <br />
                <div className="form-bot">
                  <Button
                    type="submit"
                    onClick={this.finshEditingPost}
                    className="sendPostBtn"
                  >
                    Save Editing
                  </Button>
                  <Button
                    type="cancel"
                    onClick={this.cancelForModal3}
                    className="sendPostBtn"
                  >
                    Cancel{"  "}
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feed;
