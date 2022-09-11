import bodyParser from 'body-parser'
import compress from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import path from 'path'

import authRoutes from './routes/auth.routes'
import devBundle from './devBundle'
import Template from './../template'
import userRoutes from './routes/user.routes'

const app = express()

const CURRENT_WORKING_DIR = process.cwd()

devBundle.compile(app) //comment out before live build
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use('/', authRoutes)
app.use('/', userRoutes)
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
  res.status(200).send(Template())
})

export default app
