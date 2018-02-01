import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import _ from 'lodash'
import Header from '../components/Header/Header'
import PostDetail from '../components/PostAsset/PostDetail/PostDetail'
import CommentList from '../components/CommentAsset/CommentList/CommentList'
import { getPostById, getCommentsById } from '../redux/actions'

class PostDetailView extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getCommentsById(id)
    this.props.getPostById(id)
  }

  render () {

    const renderPostDetail = _.isEmpty(this.props.post) ?
      <ReactLoading type="spin" color="gray" height="64px" width="64px" /> :
      <PostDetail post={this.props.post} comments={this.props.comments} />

    const renderCommentList = !_.isEmpty(this.props.comments) &&
      <CommentList comments={this.props.comments} />

      return (
      <div>
        <Header />
        <div className="container mt-3">
          { renderPostDetail }
          { renderCommentList }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  post: state.post,
  comments: state.comments
})

export default connect(mapStateToProps, { getPostById, getCommentsById })(PostDetailView)