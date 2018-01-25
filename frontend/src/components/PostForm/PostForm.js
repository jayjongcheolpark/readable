import React, { Component } from 'react'
import _ from 'lodash'

class PostForm extends Component {
  state = {
    category: "react",
    title: "",
    content: "",
    author: ""
  }

  handleChange= (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const { categories } = this.props
    if (categories.length === 0) {
      return <div />
    }

    const renderRadioForCategory = () => {
      return categories
        .filter(category => category !== "all")
        .map(category => {
          return (
            <label style={{ width: "100px" }}key={category} className={`btn ${this.state.category === category ? 'btn-danger active' : 'btn-secondary'}`}>
              <input
                type="radio" name="categories" id={category}
                autoComplete="off" value={category}
                onChange={(e) => this.handleChange(e, "category")}
                checked={this.state.category === category}
              />
              {_.capitalize(category)}
            </label>
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputContent">Content</label>
            <textarea
              type="text" className="form-control" id="inputContent"
              value={this.state.content} required
              onChange={(e) => this.handleChange(e, "content")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAuthor">Author</label>
            <input
              type="text" className="form-control" id="inputAuthor"
              value={this.state.author} required
              onChange={(e) => this.handleChange(e, "author")}
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
