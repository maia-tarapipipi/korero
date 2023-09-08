import express from 'express'
import { Server as ServerIo } from 'socket.io'
import { createServer } from 'http'
import path from 'path'
import { fileURLToPath } from 'url'
// import cors from 'cors'

// ----------- express server -----------
const app = express()

// ----------- cors handling -----------
// app.use(cors())

// -----------  combined server and socket connection -----------
const httpServer = createServer(app)

// -----------  socket io server -----------
const io = new ServerIo(httpServer, {
  // cors: {
  //   origin: 'http://localhost:5174',
  // },
})

// ----------- server side routes -----------
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(__dirname + 'public'))

app.get('/', (_, res) => {
  res.sendFile(__dirname + 'index.html')
})

// -----------  socket io connection -----------
io.on('connection', (socket) => {
  console.log('user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  socket.on('chat message', (msg) => {
    io.emit('new message', msg)
  })
})

// -----------  export out the combined server -----------
export default httpServer
