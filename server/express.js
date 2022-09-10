import bodyParser from 'body-parser'
import compress from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use('/', authRoutes)
app.use('/', userRoutes)

import Template from './../template'

app.get('/', (req, res) => {
  res.status(200).send(Template())
})

export default app
