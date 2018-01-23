import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Filter from '../components/FIlter/Filter'
import { getAllCategories } from '../redux/actions'

const categoriesDefault = [ 'ALL', 'REACT', 'REDUX', 'UDACITY' ]

class Main extends Component {
  state = {
    filter: 'ALL'
  }

  componentDidMount() {
    this.props.getAllCategories()
  }

  selectFilter = (category) => {
    this.setState({
      filter: category
    })
  }

  render () {
    let categories = this.props.categories
    if (categories.length === 1) {
      categories = categoriesDefault
    }

    return (
      <div>
        <nav className="navbar bg-dark">
          <Link className="navbar-brand text-light" to="/">Readable</Link>
        </nav>
        <div className="container">
        {
          <Filter
            selectFilter={() => this.selectFilter}
            categories={categories}
            default={this.state.filter}
          />

        }
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categories }
}

export default connect(mapStateToProps, { getAllCategories })(Main)