const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');

const server = express();
server.use('/api/recipes', RecipeRouter);

server.use('*', (req, res) => {
    res.json({ status: 404, message: 'Request not found' });
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({ message: err.message })
})  

module.exports = server;