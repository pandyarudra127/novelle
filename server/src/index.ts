import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import { env } from './config/env'
import { connectDatabase } from './config/database'
import { errorHandler } from './middleware/errorHandler'
import routes from './routes'

const app = express()

app.use(helmet())
app.use(cors({
  origin: env.clientUrl,
  credentials: true,
}))
app.use(compression())
app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api', routes)

app.use(errorHandler)

async function start(): Promise<void> {
  await connectDatabase()

  app.listen(env.port, () => {
    console.log(`Server running on port ${env.port} in ${env.nodeEnv} mode`)
  })
}

start().catch(console.error)

export default app
