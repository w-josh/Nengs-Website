import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

const database = mysql.createConnection({
    host: "localhost",
    user: "lashviewer",
    password:"lashes",
    database: "lashdb",
    port: 3306
});

database.connect((err) => {
    if(err){
        console.error("Error connecting to database: ", err);
        return;
    }
    console.log("connected to database");
});


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (request, response) => {
    response.render("index.ejs");
})

app.listen(port, () => {
console.log(`running on port: ${port}`);
}) 