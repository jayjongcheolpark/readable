import React from 'react'

const CloseButton = ({ closeStyle, toggleHover, handleDelete }) => {
  return (
    <button
      type="button"
      className={`close ${closeStyle}`}
      aria-label="Close"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={handleDelete}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  )
}

export default CloseButton
