import combinedServer from './server'

const port = process.env.PORT || 3000

combinedServer.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})
