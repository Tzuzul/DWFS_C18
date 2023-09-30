import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function FormButton({loading, children}) {
  return (
    <Button variant="primary" disabled={loading} type='submit'>
        {loading&&<Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
        />}
        <span>{loading?"Loading...":children}</span>
    </Button>
  )
}
