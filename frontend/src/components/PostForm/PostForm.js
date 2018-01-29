import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RadioForm from '../FormAsset/RadioForm/RadioForm'
import InputText from '../FormAsset/InputText/InputText'
import InputArea from '../FormAsset/InputArea/InputArea'

class PostForm extends Component {
  state = {
    category: "react",
    title: "",
    content: "",
    author: "",
    redirect: false
  }

  componentDidMount() {
    const { postType, post } = this.props
    if (postType === "edit") {
      this.setState({
        category: post.category,
        title: post.title,
        content: post.body,
        author: post.author
      })
    }
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.postType === "new") {
      const post = {
        category: this.state.category,
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
      }
      this.props.addPost(post)
    } else if (this.props.postType === "edit") {
      const post = {
        id: this.props.post.id,
        title: this.state.title,
        body: this.state.content,
      }
      this.props.editPost(post)
    }
    this.setState({ redirect: true })
  }

  render() {
    const { postType } = this.props

    let { categories } = this.props
    let disabled = false
    if (postType === "new") {
      if (this.state.redirect) {
        return <Redirect to="/" />
      }
    } else {
      if (this.state.redirect) {
        return <Redirect to={`/post/${this.props.post.id}`} />
      }
      const {category} = this.props.post
      categories = [category]
      disabled = true
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <RadioForm
            label="Category"
            array={categories}
            checked={this.state.category}
            handleChange={this.handleChange}
          />
          <InputText
            id="title"
            value={this.state.title}
            handleChange={this.handleChange}
            required={true}
          />
          <InputArea
            id="content"
            value={this.state.content}
            handleChange={this.handleChange}
            required={true}
          />
          <InputText
            id="author"
            value={this.state.author}
            handleChange={this.handleChange}
            required={!disabled}
            disabled={disabled}
          />
          <div className="mt-5">
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm
