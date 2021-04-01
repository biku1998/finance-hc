const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

var fs = require("fs");
var path = require("path");

const notificationRouter = require("./routes/notification");

require("./db/mongoose"); // db connection init

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "notifications.log"),
  {
    flags: "a",
  }
);

app.use(morgan("combined", { stream: accessLogStream }));

// add routers
app.use(notificationRouter);
// health check
app.get("/ping", (req, resp) => {
  resp.send({ message: "pong" });
});

module.exports = app;
