import express from 'express';
import {Server} from 'socket.io';

const PORT = 4444;
const app = express();

app.use( express.static( "public" ) );

const serv = app.listen( PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
} );

const io = new Server(serv);

io.on("connection", (socket) => {
    console.log("new user");

    socket.on("msg", (num: 1 | 2 | 3) => {
        switch(num) {
            case 1: socket.emit("msg1", "hello"); break;
            case 2: io.emit("msg1", "hello"); break;
            case 3: socket.broadcast.emit("msg1", "hello"); break;
        }
    });
    // socket.on("disconnect", () => {
    //     console.log("user disconnected");
    // });

    // socket.emit("channel", ..data);
    // io.emit("channel", ...data);
    // socket.broadcast.emit("channel", ...data);
});