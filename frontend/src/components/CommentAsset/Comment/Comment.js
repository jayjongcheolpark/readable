import React, { Component } from 'react'
import VoteBadge from '../../PostAsset/VoteBadge/VoteBadge'
import IconButton from '../../PostAsset/IconButton/IconButton'

const Comment = ({ comment }) => {
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
            clickHandler={() => this.props.upVote(comment.id)}
          />
          <IconButton
            buttonClass="btn btn-outline-secondary"
            iconClass="fa fa-thumbs-o-down"
            clickHandler={() => this.props.downVote(comment.id)}
          />
      </div>
      </div>
    </li>
  )
}

export default Comment
