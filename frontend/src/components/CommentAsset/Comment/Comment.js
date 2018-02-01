import React from 'react'

const Comment = ({ comment }) => {
  return (
    <li className="list-group-item list-group-item-warning">
      <div>{comment.body}</div>
      <small className="text-muted">commented by {comment.author}</small>
    </li>
  )
}

export default Comment
