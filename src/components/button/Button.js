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
    background: ${props => props.hoverBackground};
  }

  &:active {
    background: ${props => props.activeBackground};
    box-shadow: ${props => props.activeBoxShadow};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`

export default function Button(props) {
  const { label, buttonType, onclick } = props
  const { 
    background,
    hoverBackground,
    activeBackground,
    color,
    border,
    boxShadow,
    activeBoxShadow
  } = getButtonTypeStyles(buttonType)

  return (
    <ButtonComponent
      color={color}
      background={background}
      hoverBackground={hoverBackground}
      activeBackground={activeBackground}
      border={border}
      boxShadow={boxShadow}
      activeBoxShadow={activeBoxShadow}
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