module.exports = (app) => {
  const cancerData = require("../controllers/cancer-table.controller.js");
  const qgrsData = require("../controllers/Qgrs_mapper.controller.js");
  const G4hunterPoint9 = require("../controllers/g4hunter_point9.controller");
  const G4hunter1Point4 = require("../controllers/g4hunter_1point4.controller");

  const uploadController = require("../controllers/upload.controller");
  const upload = require("../middleware/upload");
  const homeController = require("../controllers/home");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", cancerData.create);

  // Retrieve all cancerData
  router.get("/", cancerData.findAll);

  // Retrieve all published cancerData
  router.get("/published", cancerData.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/findOne/:id", uploadController.findOne);

  // Update a Tutorial with id
  // router.put("/:id", cancerData.update);

  // Delete a Tutorial with id
  // router.delete("/:id", cancerData.delete);

  // Delete all cancerData
  // router.delete("/", cancerData.deleteAll);

  //Retrieve all qgrsData
  router.get("/qgrsData", qgrsData.findAll);

  //Retrieve all g4hunter-point9 data
  router.get("/g4hunter_point9", G4hunterPoint9.findAll);

  //Retrieve all g4hunter-1point4 data
  router.get("/g4hunter_1point4", G4hunter1Point4.findAll);

  router.get("/home", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);
  router.get("/show-plots", uploadController.findAll);

  app.use("/api/cancerData", router);
};
