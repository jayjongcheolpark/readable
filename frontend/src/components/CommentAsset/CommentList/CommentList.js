import React, { Component } from 'react'
import Comment from '../Comment/Comment'

class CommentList extends Component {
  render () {
    const renderComments = this.props
      .comments.map(comment =>
        <Comment key={comment.id} comment={comment} />
      )
    return (
      <ul className="list-group">
        {renderComments}
      </ul>
    )
  }
}

export default CommentList