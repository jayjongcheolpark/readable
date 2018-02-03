import React, { Component } from 'react'
import InputText from '../../FormAsset/InputText/InputText'

class CommentForm extends Component {
  state = {
    comment: '',
    author: ''
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const comment = {
      body: this.state.comment,
      author: this.state.author,
      parentId: this.props.parentId
    }
    this.props.addComment(comment)
    this.setState({
      comment: '',
      author: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputText
          id="comment"
          value={this.state.comment}
          required={true}
          disabled={false}
          handleChange={this.handleChange}
        />
        <InputText
          id="author"
          value={this.state.author}
          required={true}
          disabled={false}
          handleChange={this.handleChange}
        />
        <div className="mt-3">
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Add Comment
          </button>
        </div>
      </form>
    )
  }
}

export default CommentForm
