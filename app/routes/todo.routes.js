module.exports = app => {
  const todo = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", todo.create);

  // Retrieve all todo
  router.get("/", todo.findAll);

  // Delete a Tutorial with id
  router.delete("/:id", todo.delete);


  app.use('/api/todo', router);
};