import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000

const config = {
  devUrl: `http://localhost:${port}`,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'YOUR_secret-key',
  mongoUri:
    process.env.MONGO_URI ||
    'mongodb://' +
      (process.env.IP || 'localhost') +
      ':' +
      (process.env.MONGO_PORT || '27027') +
      '/mernproject',
  port: port
}

export default config
