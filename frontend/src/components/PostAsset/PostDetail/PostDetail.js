import React from 'react'
import CategoryBadge from '../CategoryBadge/CategoryBadge'
import VoteBadge from '../VoteBadge/VoteBadge'
import EditBadge from '../EditBadge/EditBadge'

const PostDetail = ({ post }) => {
  return (
    <div>
      <div className="d-flex align-items-start">
        <h2 className="mr-2">{post.title}</h2>
        <EditBadge link={`/post/edit/${post.id}`} />
      </div>
      <div>
        <small className="text-muted">
          Posted by <strong>{post.author}</strong>
        </small>{' / '}
        <small className="text-muted">
          {(new Date(post.timestamp)).toString()}
        </small>
      </div>
      <div className="mt-3">
        <span className="mr-2">
          <CategoryBadge category={post.category} />
        </span>
        <VoteBadge voteScore={post.voteScore} />
      </div>
      <div className="mt-5">
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default PostDetail