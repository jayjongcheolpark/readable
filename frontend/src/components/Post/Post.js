import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import TextTruncate from 'react-text-truncate'
import ReactLoading from 'react-loading'
import {
  upVoteToPost,
  downVoteToPost,
  deletePost
} from '../../redux/actions'
import IconButton from '../PostAsset/IconButton/IconButton'
import CloseButton from '../PostAsset/CloseButton/CloseButton'

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
    if (!post) {
      return (
        <li className="list-group-item d-flex justify-content-center p-3">
          <ReactLoading
            type="spin" color="#000000"
            height='64px' width='64px'
          />
        </li>
      )
    }

    const closeStyle = (this.state.hover) ? 'text-danger' : 'text-muted'

    const date = new Date(post.timestamp)
    const hot = post.voteScore >= 10 ?
      (<span className="badge badge-danger">HOT</span>) :
      (<span />)
    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-start">
          <Link className="h2" to={`/post/${post.id}`}>{post.title} {hot}</Link>
          <CloseButton
            closeStyle={closeStyle}
            toggleHover={this.toggleHover}
            handleDeletePost={this.handlerDeletePost}
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
            <span className="badge badge-primary mr-2" disabled>
              {_.capitalize(post.category)}
            </span>
            <span className="badge badge-secondary" disabled>
              Vote <span className="text-warning">{post.voteScore}</span>
            </span>
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

export default connect(null, { upVoteToPost, downVoteToPost, deletePost })(Post)
