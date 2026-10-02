
// her işlemden kısmamız gerekiyor konsola attığımız log bile gecikmeye sebep ama ölçüm için gerekli. 
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({
    port: 8080,
    // Verileri sıkıştırmayı devre dışı bırakıyoruz.
    perMessageDeflate: false
});

wss.on('connection', (ws) => {

    ws.on('message', (data) => {
        // mesaj alınan tarihi al
        const receivedAt = process.hrtime.bigint();
        // mesajı oku 
        const message = JSON.parse(data);
        // gecikmeyi hesap et
        const latency =
            Number(receivedAt - BigInt(message.sentAt)) / 1e6;
        console.log(`Server latency: ${latency.toFixed(3)} ms`);
        ws.send('OK');
    });

});