import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Filter from '../components/FIlter/Filter'
import { getAllCategories, getPostsByCategory } from '../redux/actions'
import PostList from '../components/PostList/PostList'

const categoriesDefault = [ 'all', 'react', 'redux', 'udacity' ]

class Main extends Component {
  state = {
    filter: 'all'
  }

  componentDidMount() {
    this.props.getAllCategories()
    this.props.getPostsByCategory(this.state.filter)
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
              selectFilter={this.selectFilter}
              categories={this.props.categories}
              default={this.state.filter}
          />
          {
            (this.props.posts && this.props.posts.length > 0) &&
              <PostList
                posts={this.props.posts}
                filter={this.state.filter}
              />
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

export default connect(
  mapStateToProps, { getAllCategories, getPostsByCategory }
)(Main)