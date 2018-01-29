import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import PostForm from '../components/PostForm/PostForm'
import Header from '../components/Header/Header'
import { getAllCategories, addPost, getPostById } from '../redux/actions'

class FormView extends Component {

  componentDidMount() {
    if (this.props.location.pathname === '/post/new') {
      this.props.getAllCategories()
    } else {
      this.props.getPostById(this.props.match.params.id)
    }
  }

  addPostHandler = (post) => {
    this.props.addPost(post)
  }

  editPostHandler = ({ id, title, body }) => {
    console.log(id, title, body)
  }

  render () {
    if (this.props.location.pathname === '/post/new') {
      return (
        <div>
          <Header />
          <div className="container p-5">
            <PostForm
              postType="new"
              addPost={this.addPostHandler}
              categories={this.props.categories}
            />
          </div>
        </div>
      )
    } else {
      if (!this.props.post.id) {
        return <ReactLoading type="spin" color="gray" height="64px" width="64px" />
      }
      return (
          <div>
            <Header />
            <div className="container p-5">
              <PostForm
                postType="edit"
                post={this.props.post}
                editPost={this.editPostHandler}
              />
            </div>
          </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    post : state.post
  }
}

export default connect(
  mapStateToProps, { getAllCategories, addPost, getPostById }
)(FormView)