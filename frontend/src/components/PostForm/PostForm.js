import React, { Component } from 'react'

class PostForm extends Component {
  state = {
    category: 'react'
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <form>
          <label className="d-block">Category</label>
          <div
            className="btn-group btn-group-toggle mb-4"
            data-toggle="buttons"
          >
            <label className="btn btn-outline-secondary">
              <input type="radio" name="categories" id="react" autoComplete="off" />React
            </label>
            <label className="btn btn-outline-secondary">
              <input type="radio" name="categories" id="redux" autoComplete="off" />Redux
            </label>
            <label className="btn btn-outline-secondary">
              <input type="radio" name="categories" id="udacity" autoComplete="off" />Udacity
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="inputTitle">Title</label>
            <input type="text" className="form-control" id="inputTitle" />
          </div>
          <div className="form-group">
            <label htmlFor="inputContent">Content</label>
            <textarea type="text" className="form-control" id="inputContent" />
          </div>
          <div className="form-group">
            <label htmlFor="inputAuthor">Author</label>
            <input type="text" className="form-control" id="inputAuthor" />
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
