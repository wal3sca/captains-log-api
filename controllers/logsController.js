const express = require("express");
const { append } = require("express/lib/response");
const logsArray = require("../models/log");
const logs = express.Router();
logs.get("/", (req, res) => {
  console.log("GET request to / logs");
  res.send(logsArray);
});
logs.get("/:arrayIndex", (req, res) => {
  console.log("GET request received to route: /logs/:arrayIndex");
  const arrayIndex = req.params.arrayIndex;
  if (logsArray[arrayIndex]) {
    res.json(logsArray[arrayIndex]);
  } else {
    res.redirect("/");
  }
});
logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray);
});
//req.params.id === :id
logs.delete("/:id", (req, res) => {
  logsArray.splice(req.params.id, 1);
  res.status(200).json(logsArray);
});

// replace the object at id with another object
// input: new object
// output: array
// logs.put("/:id", (req, res) => {
//   logsArray[arrayIndex] = req.body;
//   res.json(logsArray);
// });

module.exports = logs;
