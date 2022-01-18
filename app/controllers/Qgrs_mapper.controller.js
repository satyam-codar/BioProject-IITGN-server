const db = require("../models");
const QgrsMapper = db.QgrsMapper;
const Op = db.Sequelize.Op;

// Retrieve entire QgrsMapper from the database.
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

  QgrsMapper.findAll({ where: condition })
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

  QgrsMapper.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};
