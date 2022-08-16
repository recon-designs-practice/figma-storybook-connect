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
  color: #F2F1EF;
  background: #0E8AD0;
  border: 2px solid #2D2E31;
  box-shadow: 6px 6px 0px rgba(45, 46, 49, 0.14);
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
  return (
    <ButtonComponent>{props.label}</ButtonComponent>
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