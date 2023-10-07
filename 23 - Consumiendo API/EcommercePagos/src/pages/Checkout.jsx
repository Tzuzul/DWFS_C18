import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
import instance from '../api'
import { useNavigate } from 'react-router'

export default function Checkout() {
  const navigate = useNavigate()
  return (
    <PayPalScriptProvider options={{
      "clientId": "test"
    }}>
      <div>
          <h1>Checkout</h1>
          <p>Total: $1000</p>
          <PayPalButtons 
            onApprove={(data)=>{
              console.log(data)
              return navigate('/cart/complete')
            }} 
            createOrder={()=>{
              return instance.post('/api/payments/create',{
                total: 100
              }).then((response)=>{
                return response.data.orderID
              })
            }}
            style={{
              color: "black"
            }}
          />
      </div>
    </PayPalScriptProvider>
  )
}
