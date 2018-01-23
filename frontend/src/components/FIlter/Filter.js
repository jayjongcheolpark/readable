import React, { Component } from 'react'

class Filter extends Component {
  state = {
    filter: this.props.default
  }
  clickHandler = (category) => {
    this.setState({
      filter: category
    }, () => this.props.selectFilter(category))
  }

  render () {
    return (
      <div className="d-flex justify-content-start">
        <span className="mr-3">Filter: </span>
        {
          this.props.categories.map(category => (
            <span
              className={
                (category === this.state.filter) ?
                'text-danger font-weight-bold mr-3' :
                'text-dark font-weight-normal mr-3'
              }
              onClick={() => this.clickHandler(category)}
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