const express = require('express')
const { port } = require('./config')
const connect = require('./config/db')
const auth = require('./routes/auth')
const products = require('./routes/products')
const cors = require('cors')

const app = express()
connect()

app.use(cors({
    origin: ['http://localhost:5173']
}))
app.use(express.json())

auth(app)
products(app)

app.listen(port, ()=>{
    console.log('Listening on: http://localhost:'+port)
})