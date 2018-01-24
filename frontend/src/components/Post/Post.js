import React, { Component } from 'react'

class Post extends Component {
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
        <div className="mt-3">
          <button className="btn btn-info" disabled>{post.category}</button>
        </div>
      </li>
    )
  }
}

export default Post