import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  margin: 0px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #45464A;
`

export default function HelperText({ children }) {
  return <Text>{children}</Text>
}
