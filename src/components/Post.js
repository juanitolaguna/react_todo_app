import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.post.title}</h5>
          <p className="card-text">{this.props.post.body}</p>
          <div className="btn btn-primary" onClick={this.handleClick}>
            Delete Post
          </div>
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

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.post_id);
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
