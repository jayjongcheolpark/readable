import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Filter from '../components/FIlter/Filter'
import { getAllCategories, getPostsByCategory } from '../redux/actions'
import PostList from '../components/PostList/PostList'
import Header from '../components/Header/Header'

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
        <Header />
        <div className="container">
          <Filter
              selectFilter={this.selectFilter}
              categories={this.props.categories}
              default={this.state.filter}
          />
          <div className="mt-4 d-flex flex-row-reverse">
            <Link
              className="btn btn-success"
              to="/post/new"
            >
              New Post{' '}<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>
          </div>
          {
            (this.props.posts && this.props.posts.length > 0) &&
              <div className="mt-4">
                <PostList
                  posts={this.props.posts}
                  filter={this.state.filter}
                />
              </div>
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