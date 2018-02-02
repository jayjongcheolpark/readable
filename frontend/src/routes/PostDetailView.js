import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import _ from 'lodash'
import Header from '../components/Header/Header'
import PostDetail from '../components/PostAsset/PostDetail/PostDetail'
import CommentList from '../components/CommentAsset/CommentList/CommentList'
import CommentForm from '../components/CommentAsset/CommentForm/CommentForm'
import { getPostById, getCommentsById, addComment } from '../redux/actions'

class PostDetailView extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getCommentsById(id)
    this.props.getPostById(id)
  }

  addCommentHandler = (comment) => {
    console.log(comment)
    this.props.addComment(comment)
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
        <div className="container mt-3 pb-5">
          <div className="my-5">
            { renderPostDetail }
          </div>
          <hr />
          <div className="my-5">
            <CommentForm
              parentId={this.props.match.params.id}
              addComment={this.addCommentHandler}
            />
          </div>
          <hr />
          <div className="mt-5">
            { renderCommentList }
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  post: state.post,
  comments: state.comments
})

export default connect(mapStateToProps, { getPostById, getCommentsById, addComment })(PostDetailView)