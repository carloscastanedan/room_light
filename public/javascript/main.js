'use strict'

//Definiciòn de variables
var socket = io()
var rgb = {
		red: 0,
		green: 0,
		blue: 0
	}
var range = document.getElementsByTagName('input')

//Funcion detecta el cambio de color en color-picker
function clickColor(hex) {
	document.body.style.cursor = "pointer";
	hextorgb(hex)
	range[0].value = rgb.red 
	range[1].value = rgb.green
	range[2].value = rgb.blue
	}

setInterval( RGBDATA, 500, false)
function RGBDATA(){
	if (rgb.red !== range[0].value || rgb.green !== range[1].value || rgb.blue !== range[2].value)
	{ 
		rgb.red = range[0].value
		rgb.green = range[1].value
		rgb.blue = range[2].value
		document.getElementById('div-color').style.backgroundColor = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`
		document.getElementById('color-value-1').innerHTML = `<p id="color-value-1">rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})</p>`
		document.getElementById('color-value-2').innerHTML = `<p id="color-value-2">rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})</p>`
		socket.emit('rgb',JSON.stringify(rgb))
	}
}
		
//Conversiòn de hex a rgb
function hextorgb(hex){
	rgb.red = parseInt(hex.substring(1,3), 16)
	rgb.green = parseInt(hex.substring(3,5), 16)
	rgb.blue = parseInt(hex.substring(5,7), 16)
}
