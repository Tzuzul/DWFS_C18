import React from 'react'
import Form from 'react-bootstrap/Form';

export default function InputColor(props) {
    console.log(props)
  return <Form.Control type="color" value={props.value} onChange={props.onChange}/>
}
