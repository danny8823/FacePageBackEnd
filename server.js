const express = require('express')
const server = express()
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoute')
const postRouter = require('./routes/postRoute')
const commentRouter = require('./routes/commentRoute')
const errorHandler = require('./middlewares/isErrorMiddleware')
const cors = require('cors')
const PORT = 9999

require('dotenv').config()

mongoose
    .connect('mongodb+srv://dannyyoo714:Jesuschrist8823!@facepage.t6ipn.mongodb.net/FacePage?retryWrites=true&w=majority&appName=FacePage')
    .then(()=>{
        console.log('Database connected :)....')
    })
    .catch((e)=>{
        console.log(e)
    })

const corsOption = {
    origin: ["https://facepage123456.netlify.app"]
}

server.use(cors(corsOption))
server.use(express.json())

server.use('/',userRouter)
server.use('/',postRouter)
server.use('/', commentRouter)

server.use(errorHandler)
server.listen(PORT,() => {
    console.log(`Server started and listening on port: ${PORT}`)
})