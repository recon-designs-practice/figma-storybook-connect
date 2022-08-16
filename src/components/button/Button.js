import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getButtonTypeStyles } from './utils'

const ButtonComponent = styled.button`
  box-sizing: border-box;
  padding: 10px 12px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};
  box-shadow: ${props => props.boxShadow};
  border-radius: 2px;

  &:hover {
    background: #0C76B2;
  }

  &:active {
    background: #0B6BA1;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`

export default function Button(props) {
  const { label, buttonType, onclick } = props
  const { 
    background,
    color,
    border,
    boxShadow
  } = getButtonTypeStyles(buttonType)

  return (
    <ButtonComponent
      color={color}
      background={background}
      border={border}
      boxShadow={boxShadow}
      onClick={onclick}
    >{label}</ButtonComponent>
  )
}

Button.defaultProps = {
  label: 'Button',
  buttonType: 'primary'
}

Button.propTypes = {
  /** 
   * Text to be printed on the Button
   */
  label: PropTypes.string.isRequired,
  /**
   * Sets the themed styling for the Button
   */
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'text']),
  /**
   * Function called when button is clicked.
   */
  onclick: PropTypes.func
}