'use strict'

//Dependencies
const Cylon = require('cylon')

//Assets
const config = require('../config')

//variables
var rgb = {}

//main
module.exports = function(io){
Cylon.robot({
	connections: {
		raspi: { adaptor: 'raspi'}
	},
	
	devices: {
		red: 	{ driver: 'led', pin: config.led.red },
		green: 	{ driver: 'led', pin: config.led.green },
		blue: 	{ driver: 'led', pin: config.led.blue }
	},
	
	work: function(my){
		
		io.on('connection', (socket) =>  {
			//console.log('user connected')
			socket.on('rgb', (msg) => {
				//console.log(msg)
				rgb = JSON.parse(msg)
				my.red.brightness(parseInt(rgb.red))
				my.green.brightness(parseInt(rgb.green))
				my.blue.brightness(parseInt(rgb.blue))
				
			})
		})
	}
}).start()

}
