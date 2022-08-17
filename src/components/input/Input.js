import React from 'react'
import styled from 'styled-components'
import HelperText from './HelperText'

const InputContainer = styled.div`
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
`

export default function Input(props) {
  return (
    <InputContainer>
        <InputWrapper>
          <Label>Label</Label>
          <StyledInput placeholder={props.placeholder} />
        </InputWrapper>
        <HelperTextWrapper>
          <HelperText>Here is some text to help.</HelperText>
        </HelperTextWrapper>
    </InputContainer>
  )
}
