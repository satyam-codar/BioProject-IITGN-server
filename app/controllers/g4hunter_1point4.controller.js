const db = require("../models");
const G4hunter1Point4 = db.G4hunter1Point4;
const Op = db.Sequelize.Op;

// Retrieve entire G4hunter1Point4 from the database.
exports.findAll = (req, res) => {
  const queryString = req.query.title;
  // var condition = queryString ? { LncRNA_name: { [Op.like]: `%${queryString}%` } } : null;
  var condition = queryString
    ? {
        LncRNA_name: {
          [Op.eq]: queryString,
        },
      }
    : null;

  G4hunter1Point4.findAll({ where: condition })
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

  G4hunter1Point4.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};
