import React, { Component } from 'react'
import VoteBadge from '../../PostAsset/VoteBadge/VoteBadge'
import IconButton from '../../PostAsset/IconButton/IconButton'

class Comment extends Component {
  upVote = () => {
    this.props.upVote(this.props.comment.id)
  }
  downVote = () => {
    this.props.downVote(this.props.comment.id)
  }
  render() {
    const {comment} = this.props
    return (
      <li className="list-group-item list-group-item-warning">
        <div>{comment.body}</div>
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
