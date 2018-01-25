import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm/PostForm'
import Header from '../components/Header/Header'
import { getAllCategories, addPost } from '../redux/actions'

class FormView extends Component {

  componentDidMount() {
    this.props.getAllCategories()
  }

  addPostHandler = (post) => {
    this.props.addPost(post)
  }

  render () {
    return (
      <div>
        <Header />
        <div className="container p-5">
          <PostForm
            addPost={this.addPostHandler}
            categories={this.props.categories}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

export default connect(
  mapStateToProps, { getAllCategories, addPost }
)(FormView)