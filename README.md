# Ultrasonic-HC-SR04
Ultrasonic Sensor HC-SR04 With Node.js

## How to use

1. Install module serialport, express, socket.io
```
npm install serialport --save
npm install express --save
npm install socket.io --save
```

2. Add port "im using 3005"
```
var server = app.listen(3005);
```
3. Add serial port. im using COM6 because im connected my arduino in COM6
```
var serialPort = new SerialPort('COM6', {
  baudRate: 9600
```
4. setup telegram bot. input your bot token, chatid, and bot message. you can register your bot ini @BotFather
```
var request = require('request');
var bot_token = ''
var bot_chatID = ''
var bot_message = 'Barang anda Hilang'
var send_text = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID + '&parse_mode=Markdown&text=' + bot_message
```
5. run node in terminal.
```
node run.js
```
6. open index.html. btw you can add css for good interface xD
