import { join } from 'node:path'
import * as express from 'express'
import { Server as ServerIo } from 'socket.io'
import http from 'http'

//express server//
const expressServer = express()

// combined server and socket connection

const combinedServer = http.createServer(expressServer)

// socket io server
const io = new ServerIo(combinedServer, {})

// server side routes
expressServer.use(express.static(join(__dirname, 'public')))

expressServer.get('/', (_, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

// socket io connection
io.on('connection', (socket) => {
  console.log('socket connected hello')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// export out the combined server
export default combinedServer

const port = process.env.PORT || 3000

combinedServer.listen(port, () => {
  console.log(`listening on ${port}`)
})
