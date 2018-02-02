import React, { Component } from 'react'
import Comment from '../Comment/Comment'

class CommentList extends Component {
  upVote = (id) => {

  }
  downVote = (id) => {

  }
  render () {
    const renderComments = this.props
      .comments.map(comment =>
        <Comment
          key={comment.id}
          comment={comment}
          upVote={this.upVote}
          downVote={this.downVote}
        />
      )
    return (
      <ul className="list-group">
        {renderComments}
      </ul>
    )
  }
}

export default CommentList