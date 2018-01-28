import React, { Component } from 'react'

class CloseButton extends Component {
  render() {
    const { closeStyle, toggleHover, handlerDeletePost } = this.props
    return (
      <button
        type="button"
        className={`close ${closeStyle}`}
        aria-label="Close"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={handlerDeletePost}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    )
  }
}

export default CloseButton
