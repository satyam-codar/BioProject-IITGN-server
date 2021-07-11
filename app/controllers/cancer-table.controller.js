const db = require("../models");
const CancerTable = db.cancerTable;
const Op = db.Sequelize.Op;

// Create and Save a new CancerTable
exports.create = (req, res) => {
  // Validate request
  if (!req.body.LncRNA_name) {
    res.status(400).send({
      message: "Content can not beee empty!",
    });
    return;
  }

  // Create a CancerTable
  const cancerTable = {
    LncRNA_name: req.body.LncRNA_name,
    Cancer_name: req.body.Cancer_name,
    Method_of_Identification: req.body.Method_of_Identification,
    Expression_pattern: req.body.Expression_pattern,
    Pubmed_ID: req.body.Pubmed_ID,
    Alias: req.body.Alias,
    Subcellular_localization: req.body.Subcellular_localization,
  };

  // Save CancerTable in the database
  CancerTable.create(cancerTable)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve entire CancerTable from the database.
exports.findAll = (req, res) => {
  const queryString = req.query.title;
  // var condition = queryString ? { LncRNA_name: { [Op.like]: `%${queryString}%` } } : null;
  var condition = queryString
    ? {
        [Op.or]: [
          {
            LncRNA_name: {
              [Op.like]: `%${queryString}%`,
            },
          },
          {
            Cancer_name: {
              [Op.like]: `%${queryString}%`,
            },
          },
          {
            Alias: {
              [Op.like]: `%${queryString}%`,
            },
          },
        ],
      }
    : null;

  CancerTable.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  CancerTable.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  CancerTable.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  CancerTable.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  CancerTable.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  CancerTable.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
