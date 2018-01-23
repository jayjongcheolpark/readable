import React, { Component } from 'react'

class Filter extends Component {
  clickHandler = (category) => {
    this.props.selectFilter(category)
  }

  render () {
    return (
      <div className="col-sm-6 col-lg-4 d-flex justify-content-around">
        <span>Filter: </span>
        {
          this.props.categories.map(category => (
            <span
              onClick={this.clickHandler(category)}
            >
              {category}
            </span>
          ))
        }
      </div>
    )
  }
}

export default Filter