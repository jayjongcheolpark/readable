import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import _ from 'lodash'
import Header from '../components/Header/Header'
import PostDetail from '../components/PostDetail/PostDetail'
import { getPostById, getCommentsById } from '../redux/actions'

class PostDetailView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPostById(id)
    this.props.getCommentsById(id)
  }
  render () {
    return (
      <div>
        <Header />
        <div className="container mt-3">
          {
            _.isEmpty(this.props.post) ? (
              <ReactLoading
                type="spin" color="gray"
                height="64px" width="64px"
              />
            ) : (
              <PostDetail post={this.props.post} />
            )
          }
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, { getPostById, getCommentsById })(PostDetailView)