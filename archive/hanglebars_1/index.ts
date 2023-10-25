import express from "express";
import { engine } from "express-handlebars";
import { resolve } from "path";

const PORT = 3000;
const app = express();

const fakeAPI = () => {
    return [
        {
            name: "Rodrigo",
            score: 111
        },
        {
            name: "Albert99",
            score: 999
        }
    ]
}

app.set("view engine", "hbs"); // вказуємо який рушій буде відповідати за рендер

// app.set("views", ...)

app.engine("hbs", engine({
    layoutsDir: resolve("views/layouts"),
    extname: "hbs",
    defaultLayout: "404"
}));

app.get("/", (req, res) => {
    res.render("main", { 
        layout: "index", 
        loh: "Albert" ,
        scoreData: fakeAPI(),
        listExists: true
    });
});

app.get("*", (req, res) => {
    res.render("main");
})

app.use(express.static("./public"));

app.listen(PORT, () => {
    console.log("\n\n------\n\n");
    console.log("server is ready at: ", `http://localhost:${PORT}/`);
});