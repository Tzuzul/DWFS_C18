import React from 'react'
import Form from 'react-bootstrap/Form';

export default function InputText(props) {
  return <Form.Control type="text" value={props.value} onChange={props.onChange} />
}
