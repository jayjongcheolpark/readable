import React from 'react'
import _ from 'lodash'

const RadioForm = ({ name, category, handleChange, checked = false }) => {
  return (
    <label
      style={{ width: '100px' }}
      key={category}
      className={`btn ${
        checked
          ? 'btn-danger active'
          : 'btn-secondary'
      }`}
    >
      <input
        type="radio"
        name={name}
        id={category}
        autoComplete="off"
        value={category}
        onChange={e => handleChange(e, 'category')}
        checked={checked}
      />
      {_.capitalize(category)}
    </label>
  )
}

export default RadioForm