import React, { Component } from 'react'
import VoteBadge from '../../PostAsset/VoteBadge/VoteBadge'
import IconButton from '../../PostAsset/IconButton/IconButton'
import CloseButton from '../../PostAsset/CloseButton/CloseButton'
import CommentEditForm from '../CommentEditForm/CommentEditForm'

class Comment extends Component {
  state = {
    editMode: false
  }

  upVote = () => {
    this.props.upVote(this.props.comment.id)
  }
  downVote = () => {
    this.props.downVote(this.props.comment.id)
  }
  deleteComment = () => {
    this.props.deleteComment(this.props.comment.id)
  }

  editComment = (body) => {
    this.props.editComment({
      id: this.props.comment.id,
      body
    })
    this.setState({ editMode: false })
  }

  editMode = () => {
    this.setState({ editMode: true })
  }

  render() {
    const {comment} = this.props

    const renderCommentBody = (this.state.editMode) ?
      <CommentEditForm
        defaultVal={comment.body}
        editComment={this.editComment}
      /> :
      (
        <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-start">
          {comment.body}&nbsp;
          <button
            type="button"
            className="badge badge-success"
            onClick={this.editMode}
          >
            Edit{' '}<i className="fa fa-pencil-square-o" aria-hidden="true" />
          </button>
        </div>
          <CloseButton
            closeStyle="text-muted"
            handleDelete={this.deleteComment}
          />
        </div>
      )

    return (
      <li className="list-group-item list-group-item-warning">
        {renderCommentBody}
        <div>
          <small className="text-muted">commented by {comment.author}</small>
          {' / '}
          <small className="text-muted">
            {(new Date(comment.timestamp))
              .toLocaleString('en-CA',{ timeZone: 'America/Toronto'})}
          </small>
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <VoteBadge voteScore={comment.voteScore} />
          <div>
            <IconButton
              buttonClass="btn btn-outline-primary mr-3"
              iconClass="fa fa-thumbs-o-up"
              clickHandler={this.upVote}
            />
            <IconButton
              buttonClass="btn btn-outline-secondary"
              iconClass="fa fa-thumbs-o-down"
              clickHandler={this.downVote}
            />
        </div>
        </div>
      </li>
    )
  }
}

export default Comment
