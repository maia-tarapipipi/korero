import { createServer } from 'http'
import { join } from 'node:path'
import * as express from 'express'
import { Server } from 'socket.io'
import sockets from 'socket.io'

const server = express()
const httpServer = createServer(server)

server.use(express.static(join(__dirname, 'public')))

server.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

const io = new Server(httpServer, {
})
httpServer.listen(5173)


