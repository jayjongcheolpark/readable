import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RadioButton from '../Form/RadioButton/RadioButton'

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

    const renderRadioForCategory = () => {
      return categories
        .filter(category => category !== "all")
        .map(category => {
          return (
            <RadioButton
              name="categories"
              category={category}
              handleChange={this.handleChange}
              checked={this.state.category === category}
            />
          )
        })
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="d-block">Category</label>
          <div
            className="btn-group btn-group-toggle mb-4"
            data-toggle="buttons"
          >
            {
              renderRadioForCategory()
            }
          </div>
          <div className="form-group">
            <label htmlFor="inputTitle">Title</label>
            <input
              type="text" className="form-control" id="inputTitle"
              value={this.state.title} required
              onChange={(e) => this.handleChange(e, "title")}
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputContent">Content</label>
            <textarea
              type="text" className="form-control" id="inputContent"
              value={this.state.content} required
              onChange={(e) => this.handleChange(e, "content")}
              placeholder="Enter Content"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAuthor">Author</label>
            <input
              type="text" className="form-control" id="inputAuthor"
              value={this.state.author} required
              onChange={(e) => this.handleChange(e, "author")}
              placeholder="Enter Author"
            />
          </div>
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
