import express from "express";
import { engine } from "express-handlebars";
import { resolve } from "path";

const PORT = 3000;
const app = express();
let total = 34000000;
let viewers = 15000000;

const images = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "2.jpg" ];
const cryingBaby = "crying_baby.jpg";

app.set("view engine", "hbs"); // вказуємо який рушій буде відповідати за рендер

app.engine("hbs", engine({
    layoutsDir: resolve("views/layouts"),
    extname: "hbs",
    defaultLayout: "404"
}));

app.get("/", (req, res) => {
    res.render("main", { 
        layout: "index"
    });
});

app.get("/stats", (req, res) => {
    res.render("stats", { 
        layout: "index",
        stats: {
            budget: 28500000,
            total: setInterval(() => {
                total += Math.floor(Math.random() * 10000);
            }, 2000),
            viewers: setInterval(() => {
                viewers += Math.floor(Math.random() * 10000);
            }, 2000)
        }
    });
});

app.get("/interview", (req, res) => {
    res.render("interview", { 
        layout: "index",
        confirmation: false,
        images: images,
        cryingBaby: cryingBaby
    });
});

app.get("*", (req, res) => {
    res.render("main");
})

app.post("/images", (req, res) => {
    res.send("./public/crying_baby.jpg");
})

app.use(express.static("./public"));

app.listen(PORT, () => {
    console.log("\n\n------\n\n");
    console.log("server is ready at: ", `http://localhost:${PORT}/`);
});