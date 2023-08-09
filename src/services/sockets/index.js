import { botHandler } from './bot_client';

export const mainHandleRegister = (io,socket) => {
    console.log(`Handle socket with id ${socket.id}`);
    botHandler(io,socket);
}