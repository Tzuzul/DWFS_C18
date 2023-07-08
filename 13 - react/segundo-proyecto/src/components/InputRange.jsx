import React from 'react'
import Form from 'react-bootstrap/Form';

export default function InputRange(props) {
  return <Form.Control type="range" value={props.value} onChange={props.onChange} />
}
