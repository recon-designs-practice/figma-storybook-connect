import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  return (
    <button>{props.label}</button>
  )
}

Button.defaultProps = {
  label: 'Button'
}

Button.propTypes = {
  /** 
   * Text to be printed on the button
   */
  label: PropTypes.string
}