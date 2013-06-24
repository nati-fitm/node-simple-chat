//  SERVER  //

var http = require('http'),  
    io = require('socket.io'), // for npm, otherwise use require('./path/to/socket.io') 

server = http.createServer(function(req, res){ 
 // your normal server code 
 res.writeHead(200, {'Content-Type': 'text/html'}); 
 res.end('<h1>Hello world</h1>'); 
});
server.listen(80);
  
// socket.io 
var socket = io.listen(server); 
socket.on('connection', function(client){ 
  // new client is here! 
  client.on('message', function(){ … }) 
  client.on('disconnect', function(){ … }) 
}); 


//  CLIENT  //

<script src="http://{node_server_url}/socket.io/socket.io.js"></script> 
<script> 
 var socket = new io.Socket({node_server_url}); 
 socket.connect();
 socket.on('connect', function(){ … }) 
 socket.on('message', function(){ … }) 
 socket.on('disconnect', function(){ … }) 
</script> 
