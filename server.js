const express = require('express');

const cors = require('cors')

const actionRouter = require('./routes/actionRouter');
const projectRouter = require('./routes/projectRouter');

const server = express();


server.get('/', (req, res) => {
    res.status(200).json({ message: 'server functional' })
});

server.use(express.json());
server.use(cors());


server.use('/api/actions/', actionRouter);
server.use('/api/projects/', projectRouter);

module.exports = server;