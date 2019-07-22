//Mengkoneksikan dengan arduino
var SerialPort = require('serialport')
var Readline = SerialPort.parsers.Readline
var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(3005);
app.use(express.static('public'));
var io = socket(server);
io.on('connection', function(socket){ 
    console.log(socket.id);
});

var serialPort = new SerialPort('COM6', {
  baudRate: 9600
})

//mengkoneksikan dengan bot telegram
var request = require('request');
var bot_token = ''
var bot_chatID = ''
var bot_message = 'Barang anda Hilang'
var send_text = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID + '&parse_mode=Markdown&text=' + bot_message

var parser = new Readline()
serialPort.pipe(parser)
parser.on('data', function (data) {
  io.sockets.emit('map', data);
  if (data == 0){
  	var response = request.get(send_text)
  }
})


serialPort.on('open', function () {
  console.log('Terkoneksi dengan baik!')
})
