require('module-alias/register')

import Koa from 'koa'
import siteConfig from './configs/siteConfig'
import { DEFAULT_PORT } from './utils/constants'
import initRouter from './utils/initRouter'
import connect from './utils/mongoose'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import { errorHandler } from './utils/errorHandler'

const port = Number(siteConfig.port) || DEFAULT_PORT

const app = new Koa()

// Load Middleware
app.use(cors())
app.use(bodyParser())
app.use(errorHandler())
app.use(
  logger({
    transporter: (str) => {
      console.log(`[http]: ${str}`)
    },
  })
)
app.on('error', console.error)

// Init Router
initRouter(app)

// connect to MongoDB
connect()

const server = app.listen(port)
console.log(`[server]: Server started at port ${port}...`)

export default server
