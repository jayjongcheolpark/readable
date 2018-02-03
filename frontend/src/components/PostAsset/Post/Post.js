import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import {
  upVoteToPost,
  downVoteToPost,
  deletePost
} from '../../../redux/actions'
import IconButton from '../IconButton/IconButton'
import CloseButton from '../CloseButton/CloseButton'
import VoteBadge from '../VoteBadge/VoteBadge'
import CategoryBadge from '../CategoryBadge/CategoryBadge'

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

  handleDeletePost = () => {
    this.props.deletePost(this.props.post.id)
  }

  render() {
    const { post } = this.props

    const closeStyle = (this.state.hover) ? 'text-danger' : 'text-muted'

    const date = new Date(post.timestamp)

    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-start">
          <Link className="h2" to={`/post/${post.id}`}>{post.title}</Link>
          <CloseButton
            closeStyle={closeStyle}
            toggleHover={this.toggleHover}
            handleDelete={this.handleDeletePost}
          />
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
            <span className="mr-2">
              <CategoryBadge category={post.category} />
            </span>
            <VoteBadge voteScore={post.voteScore} />
          </div>
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

export default connect(null, {
  upVoteToPost, downVoteToPost, deletePost
})(Post)
