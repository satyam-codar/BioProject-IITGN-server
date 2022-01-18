const fs = require("fs");
const db = require("../models");
const Image = db.Image;
const Op = db.Sequelize.Op;

exports.uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must seledt a file.`);
    }
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/resources/static/assets/temp/" + image.name,
        image.data
      );
      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Image.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

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

  Image.findAll({ where: condition })
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
