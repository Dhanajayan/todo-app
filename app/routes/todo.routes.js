module.exports = app => {
  const todo = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Create a new Todo
  router.post("/", todo.create);

  // Retrieve all Todo
  router.get("/", todo.findAll);

  // Retrieve a single Todo with id
  router.get("/:id", todo.findOne);

  // Update a Todo
  router.put("/:id", todo.update);

  // Delete a Todo with id
  router.delete("/:id", todo.delete);

  // Delete all Todo
  router.delete("/", todo.deleteAll);


  app.use('/api/todo', router);
};