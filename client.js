var dgram = require( "dgram" );

var client = dgram.createSocket( "udp4" );



// proper message sending
// NOTE: the host/port pair points at server



function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

var begin

async function ping(timeout){

var message = new Buffer.from( "Ping!" );
for (let i = 0; i < 10; i++) {
    await wait(timeout)
    begin = new Date().getTime()
   client.send(message, 0, message.length, 8000, "127.0.0.1" );
  }

}
ping(1000)




function getEndTime(){
   
    var delta = end - begin;
    
    console.log('Recieved in ' + delta + 'ms');
    
}
    
var end    

client.on( "message", function( message, remote ) {
    console.log('Got', message.toString());
    end = new Date().getTime();
    
    getEndTime()
});




client.on('listening', () => {
    const address = client.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });


client.on("error", function(){
    console.log('error')
    
})