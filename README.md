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
 - Can have one server and multiple clients 
 - doesnt rely on other clients initialing requests
 - developing it for one server 
 - once you deploy you can have one server deployed and then everyone connect to it 
 - can use an express server
 - like redux - you pass an action and a packet of information, in socket.io 
 - might be tricky with TS
 - You dont need to have a separate client and server json, in your json you can create a custom script which calls the client, the server and the styling all at once
 - make sure to spread and then add the new message to the end [...prev, newMessafe]
 - already has an id in socket.id 
 - socket already has a unnique id
 - can be part of a room OR a group chat
 - use client library for the front end
 - client side will use a URL to connect to sockets -> local environment (localhost) deployment -> use deployed website
 - 
 


 questions: 
 - how to make the messages persist even after the browser is refreshed
    - having an ID / creating an account
    - Using an external database
    - 
 - How do namespaces work and what are they? 
 - How does Deployment work? 
 - 

 - socket -> goes back to same client that sent the request
 - io -> goes to all clients connected to server
 - join -> joins a room with other sockets
 - .emit
 - .broadcast

 listeners: 
 - 'connection' -> socket.io action
 - 'disconnect' ->  socket.io action
 - 'new member' can set a function for when this happens
 - 'new message' -> listener 
 - you can make a custom action which triggers when the browser interaction happens and then lines up with the back end socket.io connection
 - socket.on('send message', (kōrero: string) => {io.emit('new message', kōrero)}) -> passes a function as a parameter and within the function emits when new message is triggered and the variable packet of kōrero is passed 
 - socket.name 
 
 - client: 'message' -> socket.on('message', () { this.props.dispatch(message(text)) })
 - 
 Server: io.emit Client: Socket.emit
 - Sends event
 - 

namespaces
- communication channel which allows you to split logic?? 


SOCKETS CHEAT SHEET: 
- io.to(socket.id).emit('')
- io.emit('')
- socket.emit('')
- socket.broadcast.emit('', socket.id)
- io.to(room).emit('', socket.nickname)
- socket.join(room)
- io.in(room).clients((err, clients) => {})
- socket.nickname


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

Documentation: 
- https://socket.io/docs/v4/
- https://socket.io/docs/v4/postgres-adapter/
![socket.io postgres adapter](image.png)
- https://socket.io/get-started/chat
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- 