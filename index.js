'use strict'

//Dependencies
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

//Assets
const config = require('./config')

//middleware de ficheros estaticos
app.use(express.static('public'))

//entry ponit - ruta raiz
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})


//Instancia la liberia cylon
require('./controllers/rgb')(io)

http.listen(config.port, () => {
	console.log(`Servidor corriendo en http://localhost:${config.port}`)
})
