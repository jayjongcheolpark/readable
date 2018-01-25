import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import TextTruncate from 'react-text-truncate'
import { upVoteToPost, downVoteToPost } from '../../redux/actions'

class Post extends Component {
  state = {
    hover: false
  }

  toggleHover = () => {
    this.setState((prevState) => ({
      hover: !prevState.hover
    }))
  }

  upVote = () => {
    this.props.upVoteToPost(this.props.post.id)
  }

  downVote = () => {
    this.props.downVoteToPost(this.props.post.id)
  }

  render() {
    const { post } = this.props
    if (!post) {
      return <div />
    }

    let closeStyle
    if (this.state.hover) {
      closeStyle = 'text-danger'
    } else {
      closeStyle = 'text-muted'
    }

    const date = new Date(post.timestamp)
    const hot =
      post.voteScore >= 10 ? (
        <span className="badge badge-danger">HOT</span>
      ) : (
        <span />
      )
    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-start">
          <h2>
            {post.title} {hot}
          </h2>
          <button
            type="button"
            className={`close ${closeStyle}`}
            aria-label="Close"
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>
          <small className="text-muted">Posted by {post.author}</small>
        </div>
        <div className="mt-4">
          <TextTruncate line={1} truncateText="..." text={post.body} />
        </div>
        <div>
          <small className="text-muted">{date.toString()}</small>
        </div>
        <div className="mt-3 p-2 d-flex justify-content-between">
          <div>
            <span className="badge badge-primary mr-2" disabled>
              {_.capitalize(post.category)}
            </span>
            <span className="badge badge-secondary" disabled>
              Vote <span className="text-warning">{post.voteScore}</span>
            </span>
          </div>
          <div>
            <button
              onClick={this.upVote}
              className="btn btn-outline-primary mr-3"
            >
              <i className="fa fa-thumbs-o-up" aria-hidden="true" />
            </button>
            <button
              onClick={this.downVote}
              className="btn btn-outline-secondary"
            >
              <i className="fa fa-thumbs-o-down" aria-hidden="true" />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default connect(null, { upVoteToPost, downVoteToPost })(Post)
