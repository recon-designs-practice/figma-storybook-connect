import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  const { label, buttonType } = props
  const { 
    background,
    color,
    border,
    boxShadow
  } = getButtonTypeStyles(buttonType)

  function getButtonTypeStyles(type) {
    const lowerCaseType = type.toLowerCase()

    switch (lowerCaseType) {
      case 'primary':
      default:
        return {
          color: '#F2F1EF',
          background: '#0E8AD0',
          border: '2px solid #2D2E31',
          boxShadow: '6px 6px 0px rgba(45, 46, 49, 0.14)'
        }
      case 'secondary':
        return {
          color: '#2D2E31',
          background: '#F2F1EF',
          border: '2px solid #2D2E31',
          boxShadow: '6px 6px 0px rgba(45, 46, 49, 0.14)'
        }
      case 'text':
        return {
          color: '#0E8AD0',
          background: 'none',
          border: 'none',
          boxShadow: 'none'
        }
    }
  }

  return (
    <ButtonComponent
      color={color}
      background={background}
      border={border}
      boxShadow={boxShadow}
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
  label: PropTypes.string,
  /**
   * Sets the themed styling for the Button
   */
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'text'])
}