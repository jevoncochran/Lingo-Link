const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

const authRouter = require("../auth/auth-router");

server.use("/api/auth", authRouter);

module.exports = server;
