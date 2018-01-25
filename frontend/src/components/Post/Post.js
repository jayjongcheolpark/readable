import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import TextTruncate from 'react-text-truncate'
import { upVoteToPost, downVoteToPost } from '../../redux/actions'

class Post extends Component {

  upVote = () => {
    this.props.upVoteToPost(this.props.post.id)
  }

  downVote = () => {
    this.props.downVoteToPost(this.props.post.id)
  }

  render () {
    const { post } = this.props
    if (!post) {
      return <div />
    }
    const date = new Date(post.timestamp);
    const hot = (post.voteScore >= 10) ? <span class="badge badge-danger">HOT</span> : <span />
    return (
      <li className="list-group-item">
        <h2>{post.title}{' '}{hot}</h2>
        <div>
          <small className="text-muted">Posted by {post.author}</small>
        </div>
        <p className="h5 mt-4">
          <TextTruncate
            line={1}
            truncateText="..."
            text={post.body}
          />
        </p>
        <div>
          <small className="text-muted">{date.toString()}</small>
        </div>
        <div className="mt-3 p-2 d-flex justify-content-between">
          <div>
            <span className="badge badge-primary mr-2" disabled>
              {_.capitalize(post.category)}
            </span>
            <span className="badge badge-secondary" disabled>
              Vote{' '}<span className="text-warning">{post.voteScore}</span>
            </span>
          </div>
          <div>
            <button onClick={this.upVote} className="btn btn-outline-primary mr-3">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
            <button onClick={this.downVote} className="btn btn-outline-secondary">
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
          </div>
        </div>
      </li>
    )
  }
}

export default connect(
  null, { upVoteToPost, downVoteToPost }
)(Post)