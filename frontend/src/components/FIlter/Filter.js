import React, { Component } from 'react'
import _ from 'lodash'

class Filter extends Component {
  state = {
    filter: this.props.default
  }

  clickHandler = (category) => {
    this.setState({
      filter: category
    }, () => this.props.selectFilter(category))
    console.log(category)
  }

  render () {
    return (
      <div className="d-flex justify-content-start align-items-center mt-5">
        <span className="text-secondary mr-3">Filter: </span>
        {
          (this.props.categories.length > 0) &&
          this.props.categories.map(category => (
            <button
              key={category}
              type="button"
              style={{ width: '100px' }}
              className={
                (category === this.state.filter) ?
                'btn btn-danger mr-3' :
                'btn btn-outline-secondary mr-3'
              }
              onClick={() => this.clickHandler(category)}
            >
              {_.capitalize(category)}
            </button>
          ))
        }
      </div>
    )
  }
}

export default Filter