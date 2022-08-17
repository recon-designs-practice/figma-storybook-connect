import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HelperText from './HelperText'

const InputContainer = styled.div`
  box-sizing: border-box;
  width: 420px;
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`

const HelperTextWrapper = styled.div`
  /* border: 1px solid blue; */
`

const Label = styled.label`
  margin-bottom: 4px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #45464A;
`

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 8px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #45464A;
  background: #FFFFFF;
  border: 2px solid #B1B2B4;
  border-radius: 2px;

  &:focus {
    outline-color: #4BA8DD;
  }
`

export default function Input(props) {
  const {
    label,
    placeholder,
    helperText
  } = props

  return (
    <InputContainer>
        <InputWrapper>
          <Label>{label}</Label>
          <StyledInput placeholder={placeholder !== null ? placeholder : ''} type={'text'} />
        </InputWrapper>
        {helperText !== null ? <HelperTextWrapper><HelperText>{helperText}</HelperText></HelperTextWrapper> : null}
    </InputContainer>
  )
}

Input.defaultProps = {
  label: 'Label'
}

Input.propTypes = {
  /**
   * Text to be used as placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Text to be used as the input label
   */
  label: PropTypes.string.isRequired,
  /**
   * If a string is passed to this prop, the component will display the helper text below the input element.
   */
  helperText: PropTypes.string
}