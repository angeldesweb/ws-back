import { Client , NoAuth } from 'whatsapp-web.js';

export const client = new Client({
    authStrategy: new NoAuth()
});

export const botHandler = (io,socket) => {
    socket.on('client:init', () => {
        client.initialize();
    });

    client.on('qr', qr => {
        console.log('Emitting connection qr');
        socket.emit('qr',{qr});
    });

    client.on('authenticated', () => {
        console.log('Emmiting done authentication');
        socket.emit('auth:done')
    });

    client.on('ready', () => { 
        console.log('Emitting client ready');
        socket.emit('client:ready')
    });

    client.on('message', msg => {
        console.log(msg.body);
    }); 

    socket.on('client:stop', async () => {
        await client.destroy();
    })
}