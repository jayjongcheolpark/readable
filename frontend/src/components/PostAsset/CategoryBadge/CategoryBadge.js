import React from 'react'
import _ from 'lodash'

const CategoryBadge = ({category}) => {
  return (
    <span className="badge badge-primary" disabled>
    {_.capitalize(category)}
  </span>
  )
}

export default CategoryBadge
