import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
      <Link className="navbar-brand text-light" to="/">Readable</Link>
      </nav>
    </div>
  )
}

export default Header