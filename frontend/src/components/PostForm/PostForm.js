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

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {
      category: this.state.category,
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    }
    this.props.addPost(post)
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    const { categories } = this.props
    if (categories.length === 0) {
      return <div />
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
            required={true}
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
