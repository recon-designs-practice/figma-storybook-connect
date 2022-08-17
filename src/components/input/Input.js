import React from 'react'
import HelperText from './HelperText'

export default function Input(props) {
  return (
    <div>
        <div>
          <label style={{ display: 'flex' }}>Label</label>
          <input placeholder={props.placeholder} />
        </div>
        <div>
          <HelperText>Here is some text to help.</HelperText>
        </div>
    </div>
  )
  
}
