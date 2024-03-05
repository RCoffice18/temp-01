const express = require("express");
const cors = require("cors");
const node = process.env.NODE_ENV;

const server = express();

server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

let port = 5000;

server.listen(port, () => {
  console.log(`Server active: environment=${node}, port=${port}`);
});
