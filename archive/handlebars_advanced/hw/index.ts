import express from "express";
import { engine } from "express-handlebars";
import { resolve } from "path";

const PORT = 3000;
const app = express();

app.set("view engine", "hbs"); // вказуємо який рушій буде відповідати за рендер

app.engine("hbs", engine({
    layoutsDir: resolve("views/layouts"),
    extname: "hbs",
    defaultLayout: "404",
    helpers: {
        isEven: (value: number) => value % 2 === 0
    }
}));

app.get("*", (req, res) => {
    res.render("main", {
        layout: "index", 
        bool: true, 
        num: 21, 
        arr: [1, 1, 3], 
        arr2d: [[1,2], [1,2,3]],
        cat: {callsign: "predator", name: "coco"}
    });
})

app.use(express.static("./public"));

app.listen(PORT, () => {
    console.log("\n\n------\n\n");
    console.log("server is ready at: ", `http://localhost:${PORT}/`);
});