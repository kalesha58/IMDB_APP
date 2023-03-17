const express = require("express");
const dbConnect=require("./dbConnection")
require("dotenv/config");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
dbConnect()

app.use(bodyparser.json());
app.use(cors());

// MIDDLE WARE

// importing routes
const postRoute = require("./Routes/post.js");
const MovieRoutes=require("./Routes/movie.js");

app.use("/posts", postRoute);
app.use("/api",MovieRoutes)
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("HOME");
});

// ======================MONGODB CONNCETIONS+++++++++=========================

app.listen(PORT, () => {
  console.log("server runnig on http://localhost:8080");
});
