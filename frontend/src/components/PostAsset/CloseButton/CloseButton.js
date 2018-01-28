import React, { Component } from 'react'

class CloseButton extends Component {
  render() {
    const { closeStyle, toggleHover, handleDeletePost } = this.props
    return (
      <button
        type="button"
        className={`close ${closeStyle}`}
        aria-label="Close"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={handleDeletePost}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    )
  }
}

export default CloseButton
