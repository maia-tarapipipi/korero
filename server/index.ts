import httpServer from './server'

const port = process.env.PORT || 3000
httpServer.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
