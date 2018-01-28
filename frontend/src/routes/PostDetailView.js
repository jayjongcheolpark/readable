import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import PostDetail from '../components/PostDetail/PostDetail'
import { getPostById } from '../redux/actions'

class PostDetailView extends Component {
  componentDidMount() {
    this.props.getPostById(this.props.match.params.id)
  }
  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <PostDetail post={this.props.post} />
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, { getPostById })(PostDetailView)