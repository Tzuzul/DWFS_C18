const express = require('express')
const cors = require('cors')
const { port } = require('./config')
const connect = require('./config/db')
const auth = require('./routes/auth')
const posts = require('./routes/posts')
const comments = require('./routes/comments')
const { handleAuthError } = require('./middlewares/auth')

const app = express()
connect()

app.use(cors({
    origin: ['http://localhost:5173']
}))
app.use(express.json())

//Routes
auth(app)
posts(app)
comments(app)

app.use(handleAuthError)

app.listen(port, ()=>{
    console.log('Listening on: http://localhost:'+port)
})