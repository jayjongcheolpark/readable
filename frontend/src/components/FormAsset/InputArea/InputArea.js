import React from 'react'
import _ from 'lodash'

const InputArea = ({ id, value, handleChange, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{_.capitalize(id)}</label>
      <textarea
        type="text"
        className="form-control"
        id={id}
        value={value}
        required={required}
        onChange={e => handleChange(e, id)}
        placeholder={`Enter ${_.capitalize(id)}`}
      />
    </div>
  )
}

export default InputArea