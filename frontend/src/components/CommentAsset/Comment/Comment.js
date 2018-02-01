import React from 'react'

const Comment = ({ comment }) => {
  return (
    <li className="list-group-item list-group-item-warning">
      <div>{comment.body}</div>
      <small className="text-muted">commented by {comment.author}</small>{' / '}
      <small className="text-muted">
        {(new Date(comment.timestamp)).toLocaleString('en-CA',{ timeZone: 'America/Toronto'})}
      </small>
    </li>
  )
}

export default Comment
