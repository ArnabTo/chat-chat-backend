const express = require('express');
const app = express();
const { createServer } = require('http');
const { Server } = require('socket.io');
const connectDb = require('./config/db');
const PORT = process.env.PORT || 4000;
const server = createServer(app);
const dotenv = require('dotenv').config();


const userRoutes = require('./routes/userRoutes')


connectDb();
app.use(express.json());

const io = new Server(server, {});


// io.on('connection', (socket)=>{
 
//     console.log('Hello, Socketio');
// })

// server.listen(PORT, ()=>{
//     console.log('Server is running on', PORT)
// })


app.get('/', (req,res)=>{
     res.send('Server is running well!')
})
app.listen(PORT, ()=>{
    console.log('Yay, Server is running')
})