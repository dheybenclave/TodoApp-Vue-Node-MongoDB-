console.log("'dassa'");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
    res.send({
        message: "hello ",
    });
});
const todos = require("../routes/api/todos");
app.use("/api/todos=all", todos);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started in port ${port}`));