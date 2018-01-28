import React, { Component } from 'react'
import Header from '../components/Header/Header'
import PostDetail from '../components/PostDetail/PostDetail'

class PostDetailView extends Component {
  componentDidMount() {

  }
  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <PostDetail postId />
        </div>

      </div>
    )
  }
}

export default PostDetailView