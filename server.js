const express = require('express');
const app = express();
const PORT = process.env.PORT || 4005;
const cors = require('cors');
const connectDb = require('./config/db');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require('./middleware/errorHandlerMiddleware')
// Middleware
connectDb();
app.use(express.json());
app.use(cors());



// Routes
app.use('/api/user', userRoutes);


app.get('/', (req, res) => {
    console.log('Received request on /');
    res.send('Server is running well!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Yay, Server is running on port ${PORT}`);
});

app.use(notFound)
app.use(errorHandler)