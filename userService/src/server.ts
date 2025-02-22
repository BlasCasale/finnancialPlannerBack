import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import { userRouter } from './routes/user.routes'

export const server = express()

server.use(morgan('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
server.use(userRouter)
server.use('*', (_req, res) => {
  res.status(404).json({ error: 'Por favor ingrese un endpoint válido.' })
})
