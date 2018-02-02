import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Comment/Comment'
import { upVoteToComment, downVoteToComment, deleteComment } from '../../../redux/actions'

class CommentList extends Component {
  upVote = (id) => {
    this.props.upVoteToComment(id)
  }
  downVote = (id) => {
    this.props.downVoteToComment(id)
  }
  deleteComment = (id) => {
    this.props.deleteComment(id)
  }
  render () {
    const renderComments = this.props
      .comments.map(comment =>
        <Comment
          key={comment.id}
          comment={comment}
          upVote={this.upVote}
          downVote={this.downVote}
          deleteComment={this.deleteComment}
        />
      )
    return (
      <ul className="list-group">
        {renderComments}
      </ul>
    )
  }
}

export default connect(null, { upVoteToComment, downVoteToComment, deleteComment })(CommentList)