require('module-alias/register')

import Koa from 'koa'
import siteConfig from './configs/siteConfig'
import { DEFAULT_PORT } from './utils/constants'
import initRouter from './core/initRouter'
import initMiddleware from './core/initMiddleware'
const port = Number(siteConfig.port) || DEFAULT_PORT

const app = new Koa()

initMiddleware(app)
initRouter(app)

const server = app.listen(port)
console.log(`[server]: Server started at port ${port}...`)

export default server
