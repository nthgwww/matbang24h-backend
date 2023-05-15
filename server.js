import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDatabase from './src/config/connectDatabase'
// import generateCode from './src/ultis/generateCode'

// console.log(generateCode('Cho thuê phòng trọ Quận Tân Bình'))
const app = express()   
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods:["POST","GET",'PUT','DELETE']
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use('/', (req,res)=>{res.send('server on ....')})
initRoutes(app)
connectDatabase()

const port = process.env.PORT || 8888
const listener = app.listen(port, ()=>{
    console.log(`Server is running on port ${listener.address().port}`)
})