import express, { Express, Request, Response } from 'express'
import { json, urlencoded } from 'body-parser'
import * as ip from 'ip'
import dotenv from 'dotenv'
import next from 'next'
import dbConnection from './setupDbConnection'

dotenv.config()
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server: Express = express()
server.use(json())
server.use(urlencoded({ extended: false }))

app.prepare().then(() => {
  ;(async () => {
    try {
      const conn = await dbConnection()
      console.log(`ORM data connection established with the following settings:
    Driver Name: ${conn.options.type} `)
    } catch (error) {
      console.log(`ORM Error: ${error}`)
    }

    server.get('/b', (req: Request, res: Response) => {
      return app.render(req, res, req.path, req.query)
    })

    server.get('/a', (req: Request, res: Response) => {
      return app.render(req, res, req.path, req.query)
    })

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res, req.query)
    })

    server.listen(port, () => {
      console.log(`Server running on ${ip.loopback()}:${port}`)
    })
  })()
})
