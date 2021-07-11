module.exports = app => {
    const cancerData = require("../controllers/cancer-table.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", cancerData.create);
  
    // Retrieve all cancerData
    router.get("/", cancerData.findAll);
  
    // Retrieve all published cancerData
    router.get("/published", cancerData.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", cancerData.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", cancerData.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", cancerData.delete);
  
    // Delete all cancerData
    router.delete("/", cancerData.deleteAll);
  
    app.use('/api/cancerData', router);
  };