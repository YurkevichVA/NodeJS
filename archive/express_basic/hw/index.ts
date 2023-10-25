import express from "express";
import { resolve } from "path";

const PORT = 3000;
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(resolve("./public/main.html"));
})

app.get('/downloads/file.txt', (req, res) => {
    const file = resolve("./downloads/file.txt");
    res.download(file); // Set disposition and send it.
  });

  app.get('/downloads/file.pdf', (req, res) => {
    const file = resolve("./downloads/file.pdf");
    res.download(file); // Set disposition and send it.
  });

  app.get('/downloads/file.jpg', (req, res) => {
    const file = resolve("./downloads/file.jpg");
    res.download(file); // Set disposition and send it.
  });

app.listen(PORT, () => {
    console.log("\n\n------\n\n");
    console.log("server is ready at: ", `http://localhost:${PORT}/`);
})