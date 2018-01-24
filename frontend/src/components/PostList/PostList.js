import React, { Component } from 'react'

class PostList extends Component {
  render () {
    if (this.props.filter === 'all') {
      return this.props.posts
        .map(post => <div key={post.id}>{post.title}</div>)
    } else {
      return this.props.posts
        .filter(post => post.category === this.props.filter)
        .map(post => <div key={post.id}>{post.title}</div>)
    }
  }
}

export default PostList