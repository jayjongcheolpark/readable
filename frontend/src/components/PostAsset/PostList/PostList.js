import React, { Component } from 'react'
import Post from '../Post/Post'

class PostList extends Component {
  render () {
    let posts
    if (this.props.filter === 'all') {
      posts = this.props.posts
    } else {
      posts = this.props.posts
            .filter(post => post.category === this.props.filter)
    }
    return (
      <ul className="list-group">
      {
        posts.map(post => <Post key={post.id} post={post} />)
      }
      </ul>
    )
  }
}

export default PostList