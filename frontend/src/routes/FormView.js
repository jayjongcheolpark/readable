import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm/PostForm'
import Header from '../components/Header/Header'

class FormView extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className="container p-5">
          <PostForm categories={this.props.categories} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

export default connect(
  mapStateToProps
)(FormView)