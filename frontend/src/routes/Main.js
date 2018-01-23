import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../components/FIlter/Filter'

const categories = [ 'All', 'React', 'Redux', 'Udacity' ]

class Main extends Component {
  state = {
    filter: 'All'
  }

  selectFilter = (category) => {
    this.setState({
      filter: category
    })
  }

  render () {
    return (
      <div>
        <nav className="navbar bg-dark">
          <Link className="navbar-brand text-light" to="/">Readable</Link>
        </nav>
        <div className="container">
          <Filter
            selectFilter={() => this.selectFilter}
            categories={categories}
            default={this.state.filter}
          />
        </div>

      </div>
    )
  }
}

export default Main