const express = require("express");
const connectDb = require("./api/config/db");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

/* app.use("/api", require("./api/routes/routes")); */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", require("./api/routes/routes"));

app.listen(port, () => {
    connectDb();
    console.log(`Example app listening at http://localhost:${port}`);
});