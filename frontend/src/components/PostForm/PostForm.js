import React, { Component } from 'react'
import _ from 'lodash'

class PostForm extends Component {
  state = {
    category: "react"
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      category: changeEvent.target.value
    })
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
                onChange={this.handleOptionChange}
                checked={this.state.category === category}
              />
              {_.capitalize(category)}
            </label>
          )
        })
    }

    return (
      <div>
        <form>
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
