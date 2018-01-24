import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upVoteToPost, downVoteToPost } from '../../redux/actions'

class Post extends Component {

  upVote = () => {
    this.props.upVoteToPost(this.props.post.id)
  }

  downVote = () => {
    this.props.downVoteToPost(this.props.post.id)
  }

  render () {
    const { post } = this.props
    if (!post) {
      return <div />
    }
    const date = new Date(post.timestamp);
    return (
      <li className="list-group-item">
        <h2>{post.title}</h2>
        <div className="text-muted">Posted by {post.author}</div>
        <h5 className="mt-4">{post.body}</h5>
        <div>
          <span className="text-muted">{date.toString()}</span>
        </div>
        <div className="mt-3 p-2 d-flex justify-content-between">
          <button className="btn btn-outline-info" disabled>{post.category}<span className="badge badge-light">{post.voteScore}</span></button>
          <div>
            <button onClick={this.upVote} className="btn btn-outline-primary mr-3">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
            <button onClick={this.downVote} className="btn btn-outline-secondary">
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
          </div>
        </div>
      </li>
    )
  }
}

export default connect(
  null, { upVoteToPost, downVoteToPost }
)(Post)