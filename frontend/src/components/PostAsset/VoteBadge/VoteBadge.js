import React from 'react'

const VoteBadge = ({voteScore}) => {
  let badgeColor = "badge-secondary"
  if (voteScore >=10) {
    badgeColor = "badge-danger"
  }
  return (
    <span className={`badge ${badgeColor}`} disabled>
      Vote{' '}
      <span className="text-warning">
        {voteScore}
      </span>
    </span>
  )
}

export default VoteBadge
