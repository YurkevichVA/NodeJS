import { writeFile } from "fs";
import { readFile } from "fs/promises";
import { createServer } from "http";

const PORT = 4000;

const routes = {
    "/": "./index.html",
    "/library": "./library.html",
    "/gif1": "./gif1.gif",
    "/gif2": "./gif2.gif",
    "/gif3": "./gif3.gif",
    "/gif4": "./gif4.gif",
    "/gif5": "./gif5.gif"
}

let gradients: Array<string> = [];

const colors: Array<string> = ['red', 'green', 'blue', 'purple', 'pink', 'black', 'yellow', 'brown'];

const onRequest = (req, res) => {

    let color1 = colors[Math.floor(Math.random() * colors.length)];
    let color2 = colors[Math.floor(Math.random() * colors.length)];
    let angle = Math.floor(Math.random() * 359);

    let gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    gradients.push(gradient);

    if (routes[req.url]) {
        readFile(routes[req.url]).then((data) => {
            if(!req.url.includes("gif")) {
                let str = String(data).replace("%gradient%", gradient);

                if (req.url === "/") {
                    str = str.replace("%requestCount%", String(gradients.length));
                } 

                res.end(str);
            } else {
                res.end(data);
            }
            
        });
    } else {
        readFile("./404.html").then((data) => {
            let str = String(data).replace("%gradient%", gradient);
            res.end(str);
        });
    }
}

const server = createServer();

server.on("request", onRequest);

server.listen(PORT, () => {
    console.log("srv is ready ", `http://localhost:${PORT}`)
});