import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';


const TextInputGroup = ({ name, id, placeholder, type, value, onChange, label, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}: </label>
      <input onChange={onChange}
        className={classNames("form-control", {
          'is-invalid': error
        })}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        value={value} />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextInputGroup.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;