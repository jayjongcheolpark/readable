import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostForm from '../components/PostForm/PostForm'

class FormView extends Component {
  render () {
    return (
      <div>
        <nav className="navbar bg-dark">
          <Link className="navbar-brand text-light" to="/">Readable</Link>
        </nav>
        <div className="container p-5">
          <PostForm />
        </div>
      </div>
    )
  }
}

export default FormView