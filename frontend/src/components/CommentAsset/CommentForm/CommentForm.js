import React, { Component } from 'react'
import InputText from '../../FormAsset/InputText/InputText'

class CommentForm extends Component {
  state = {
    body: '',
    author: ''
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <InputText
          id="comment"
          value={this.state.body}
          required={true}
          onChange={this.handleChange}
        />
        <InputText
          id="author"
          value={this.state.author}
          required={true}
          onChange={this.handleChange}
        />
        <div className="mt-3">
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Add Comment
          </button>
      </div>
      </div>
    )
  }
}

export default CommentForm