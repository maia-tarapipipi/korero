Welcome!!

NPM run dev: runs local host

figma wireframe: 
https://www.figma.com/file/qWlffP9CnZ5wAi8yN26HmB/chatroom-%2F-meetup-app?type=design&node-id=0%3A1&mode=design&t=KjADbWkktBy93sBe-1


Learnings and Research
 
 Socket Io 
 - socket.io => client => server
 - npm install socket.io
 - install in server -> make connnection
 - websockets opens a line of communication and leaves it open while its active
 - configure server file for socket.io
 - typically the sockets take an action (socket.on/socket.io/socket.emit), pass a function and then chooses to respond back with something
 - need to set up http and socket io 
 - set up using express ?? research why
 - socket -> goes back to same client
 - io -> goes to all clients
 - Can have one server and multiple clients 
 - doesnt rely on other clients initialing requests
 - developing it for one server 
 - once you deploy you can have one server deployed and then everyone connect to it 
 - 

 questions: 
 - how to make the messages persist even after the browser is refreshed
    - having an ID / creating an account
    - Using an external database
    - 
 - 

 Server: io.on client: socket.on
 - 'connect' -> 
 - client: 'message' -> socket.on('message', () { this.props.dispatch(message(text)) })
 - 
 Server: io.emit Client: Socket.emit
 - Sends event
 - 

namespaces
- communication channel which allows you to split logic?? 
- does this wor

SOCKETS CHEAT SHEET: 
- io.to(socket.id).emit('')
- io.emit('')
- socket.emit('')
- socket.broadcast.emit('', socket.id)
- io.to(room).emit('', socket.nickname)
- socket.join(room)
- io.in(room).clients((err, clients) => {})
- socket.nickname

Documentation: 
- https://socket.io/docs/v4/
- https://socket.io/docs/v4/postgres-adapter/
![socket.io postgres adapter](image.png)
Postgres
- notify + listen commands

postgres
- similar to SQLlite 
- when you create an item 
- postgres doesnt return a new id? 
- less feedback from the server because it wont return the new id
- Cloud services -> AWS, Azure, Google
- package code as a docker image -> deploy to ECR -> you fire up EC2 instance -> use image from docker
- container -> giving the computer instructions on how to build and run (like buying the ingredients and then giving it to the chef)