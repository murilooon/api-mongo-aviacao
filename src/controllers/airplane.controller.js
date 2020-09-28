const AirplaneModel = require('../../database/models/Airplane');
const ObjectId = require('mongodb').ObjectId;

exports.createAirplane = async (req, res) => {
  const { model, serial_number } = req.body;

  let airplane = new AirplaneModel({
    serial_number: serial_number,
    model: model
  })

  airplane.save()
  .then(result => {
    res.json({ success: true, result: result})
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.listAllAirplanes = async (req, res) => {
  AirplaneModel.find()
  .then(airplane => {
    res.json(airplane)
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.findAirplaneById = async (req, res) => {
  const id = req.params.id;

  AirplaneModel.find({_id: ObjectId(id)})
  .then(airplane => {
    res.json({ success: true, result: airplane})
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.updateAirplaneById = async (req, res) => {
  const id = req.params.id;
  const { model_id, serial_number } = req.body;

  AirplaneModel.update({ _id: id },{
    model_id: model_id,
    serial_number: serial_number
  })
  .then(airplane => {
    if (!airplane) res.json({ success: false, result: "No such airplane exists"})

    res.json(airplane)
  })
  .catch(err => {
      res.json({ success: false, result: err})
  })
};

exports.deleteAirplaneById = async (req, res) => {
  const id = req.params.id;

  AirplaneModel.deleteOne({ _id: id })
  .then(
    res.json({ success: true, result: 'Avião deletado com sucesso'})
  )
  .catch(err => {
    res.json({ success: false, result: err})
  })
};
