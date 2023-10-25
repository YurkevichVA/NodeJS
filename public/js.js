import { error } from "console";
import "/socket.io/socket.io.js";

const socket = io(
    //{ reconnectionAttempts: 2 }
);

// socket.io.on("reconnect", (attempts) => { });

// socket.io.on("reconnect_error", (error) => { });

// socket.io.on("reconnect_failed", (error) => { });

// socket.io.on("error", (error) => { });

socket.on("connect", () => {
    console.log("connect");
});

socket.on("msg1", (str) => {
    console.log(str);
})

btn1.onclick = () => socket.emit("msg", 1);
btn2.onclick = () => socket.emit("msg", 2);
btn3.onclick = () => socket.emit("msg", 3);

// socket.emit("channel", ...data);

// socket.on("disconnect", (reason) => { });