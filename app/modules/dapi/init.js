// export const init = () => {
//   const PORT = 8123
//   const io = require('socket.io').listen(PORT)

//   console.log(`listening on *:${PORT}`)

//   io.on('connection', socket => {
//     console.log('a user connected')
//     io.emit('chat_message', 'Greetings from the server')
//     // socket.emit('chat_message', "Greetings from the server");

//     socket.on('chat_message', msg1 => {
//       console.log(msg1)
//       socket.emit('chat_message', 'Reply from server')
//     })

//     socket.on('disconnect', () => {
//       console.log('user disconnected')
//     })
//   })
// }
