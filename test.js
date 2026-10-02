// test kodu

const WebSocket = require('ws');

const CLIENT_COUNT = 5; // burayı ayarlayabilirsiniz

for (let i = 0; i < CLIENT_COUNT; i++) {

    const ws = new WebSocket('ws://localhost:8080', {
        perMessageDeflate: false
    });

    ws.on('open', () => {
        ws._socket.setNoDelay(true); // gecikmeyi azaltıyoruz
        const sentAt = process.hrtime.bigint(); // vakit tutuyoruz

        ws.send(JSON.stringify({
            sentAt: sentAt.toString()
        }));
        // mesajı alana kadar kapatmıyoruz
        ws.once('message', () => {
            ws.close();
        });
    });

    ws.on('error', console.error);
}