import React from 'react'
import _ from 'lodash'

const InputText = ({ id, value, handleChange, required, disabled }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{_.capitalize(id)}</label>
      <input
        type="text"
        className="form-control"
        id={id}
        value={value}
        required={required}
        disabled={disabled}
        onChange={e => handleChange(e, id)}
        placeholder={`Enter ${_.capitalize(id)}`}
      />
    </div>
  )
}

export default InputText
