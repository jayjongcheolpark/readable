import React, { Component } from 'react'

class Post extends Component {
  render () {
    return (
      <li className="list-group-item">
        {this.props.post.title}
      </li>
    )
  }
}

export default Post