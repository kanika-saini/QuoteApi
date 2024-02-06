const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

async function serverSetupAndStart() {
  // body parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log("Listening on the port ", PORT);
  });
}

serverSetupAndStart();
