var host = "127.0.0.1", port = 8000;

var dgram = require( "dgram" );

var server = dgram.createSocket( "udp4" );

const reply = new Buffer.from('Pong!');

server.on( "message", function( message, remote ) {
  console.log('Got', message.toString());
  
  server.send(reply, 0, reply.length, remote.port, remote.address);


});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind( port, host );