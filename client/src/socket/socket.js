import openSocket from 'socket.io-client';
const socket = openSocket()

function listenForMessage(cb) {
    socket.on("NEW_MESSAGE", msg => cb(msg, null));
}

export { listenForMessage };