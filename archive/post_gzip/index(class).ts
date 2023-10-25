import { createReadStream, read, writeFile } from "fs";
import { readFile } from "fs/promises";
import { createServer, IncomingMessage, ServerResponse } from "http";
import { createGzip } from "zlib";

const PORT = 4000;

// POST gzip

const onRequest = (req: IncomingMessage, res: ServerResponse) => {
    if(req.method === "GET") {
        if(req.url === "/") {
            res.writeHead(200, {"Content-Encoding": "gzip"});
            // readFile("./index.html").then((html) => res.end(html));
            createReadStream("./index.html").pipe(createGzip()).pipe(res);
        } else {
            res.writeHead(404).end();
        }
    } else if (req.method === "POST") {
        let body = '';

        req.on("data", (chunk) => {
            body += chunk;
        })

        req.on("end", () => {
            console.log("post data received: ", body);
            res.end();
        })
    }
}

const server = createServer();

server.on("request", onRequest);

server.listen(PORT, () => {
    console.log("srv is ready ", `http://localhost:${PORT}`)
});