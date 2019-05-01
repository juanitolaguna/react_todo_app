import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res.data);
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div>
            <div className="card" key={post.id}>
              <div className="card-body">
                <Link to={"/" + post.id}>
                  <h5 className="card-title">{post.title}</h5>
                </Link>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
            <br />
          </div>
        );
      })
    ) : (
      <strong>No posts yet</strong>
    );
    return (
      <div className="container">
        <h4>Home</h4>
        <br />
        {postList}
      </div>
    );
  }
}

export default Home;
