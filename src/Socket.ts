import { io } from 'socket.io-client'

//may need to pass the URL
// const url = 'deployed site url'

const url = 'http://localhost:3000/'
const socket = io(url, { transports: ['websocket'] })

export default socket