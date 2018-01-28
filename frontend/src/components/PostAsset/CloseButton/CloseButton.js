import React from 'react'

const CloseButton = ({ closeStyle, toggleHover, handleDeletePost }) => {
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

export default CloseButton
