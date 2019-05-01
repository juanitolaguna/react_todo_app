import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Post extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        post: res.data
      });
      console.log(res);
    });
  }

  render() {
    const post = this.state.post ? (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.post.title}</h5>
          <p className="card-text">{this.state.post.body}</p>
          <Link to={"/"} className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    ) : (
      <div className="alert alert-primary" role="alert">
        No post found!
      </div>
    );
    return (
      <div>
        <div className="container">{post}</div>
      </div>
    );
  }
}
