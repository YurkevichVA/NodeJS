import { createReadStream, read, writeFile } from "fs";
import { readFile } from "fs/promises";
import { createServer, IncomingMessage, ServerResponse } from "http";
import { createGzip } from "zlib";

const PORT = 4000;

let gifNum = '';

// POST gzip

const onRequest = (req: IncomingMessage, res: ServerResponse) => {
    if(req.method === "GET") {
        if(req.url === "/") {
            readFile("./index.html").then((html) => { res.end(html) })
        } else if (req.url?.includes("gif") ) {
            console.log(gifNum);
            res.writeHead(200, {"Content-Encoding": "gzip"});
            createReadStream("./gif" + gifNum + ".gif").pipe(createGzip()).pipe(res);
        } else {
            res.writeHead(404).end();
        }
    }
    else if( req.method === "POST") {
        let body = '';
        req.on("data", (chunk) => {
            body += String(chunk);
        });
        req.on("end", () => {
            console.log("post data received: ", body);
            gifNum = body;
            res.end();
            //readFile(`./gif${body}.gif`).then((gif) => {res.end(gif)});
        });
    }
}

const server = createServer();

server.on("request", onRequest);

server.listen(PORT, () => {
    console.log("srv is ready ", `http://localhost:${PORT}`)
});