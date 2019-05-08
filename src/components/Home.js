import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
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

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
