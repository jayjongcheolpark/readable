import React from 'react'

const VoteBadge = ({voteScore}) => {
  return (
    <span className="badge badge-secondary" disabled>
      Vote{' '}
      <span className="text-warning">
        {voteScore}
      </span>
    </span>
  )
}

export default VoteBadge
