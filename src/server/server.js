import next from 'next'
import express from 'express'
import { nodeEnv, nodePort } from '../config'

const dev = nodeEnv !== 'production'
const PORT = nodePort || 8080
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => app.render(req, res, '/', req.query))

  server.get('*', (req, res) => handler(req, res))

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on port ${PORT}`)
  })
})
