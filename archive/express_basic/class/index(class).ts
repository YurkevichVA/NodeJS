import express from "express";
import { resolve } from "path";

const PORT = 3000;
const app = express();

// middleware

app.use((req, res, next) => {
    console.log("new request: ", req.url);
    next();
})

app.use(express.static("./public"));

app.get("/", (req, res) => {
    // res.send('<b> page 1 </b>'); // send самостійно встановлює заголовки і встановлює типи на відміну від стандартного .end()
    // res.status(404).send("text");
    res.sendFile(resolve("./public/index.html"));
})

app.listen(PORT, () => {
    console.log("\n\n------\n\n");
    console.log("server is ready at: ", `http://localhost:${PORT}/`);
})