import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Comment/Comment'
import { upVoteToComment, downVoteToComment } from '../../../redux/actions'

class CommentList extends Component {
  upVote = (id) => {
    this.props.upVoteToComment(id)
  }
  downVote = (id) => {
    this.props.downVoteToComment(id)
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

export default connect(null, { upVoteToComment, downVoteToComment })(CommentList)