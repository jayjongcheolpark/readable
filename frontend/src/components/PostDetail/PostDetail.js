import React, { Component } from 'react'
import CategoryBadge from '../PostAsset/CategoryBadge/CategoryBadge'
import VoteBadge from '../PostAsset/VoteBadge/VoteBadge'

class PostDetail extends Component {
  render () {
    const { post } = this.props
    return (
      <div>
        <h2>{post.title}</h2>
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
}

export default PostDetail