const Model = require('../../database/models/Model');
const ObjectId = require('mongodb').ObjectId;

exports.createModel = async (req, res) => {
  const { name, capacity, weight } = req.body;

  let model = new Model({
    name: name,
    capacity: capacity,
    weight: weight
  })

  model.save()
  .then(result => {
    res.json({ success: true, result: result})
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.listAllModels = async (req, res) => {
  Model.find()
  .then(model => {
    res.json(model)
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.findModelById = async (req, res) => {
  const id = req.params.id;

  Model.find({_id: ObjectId(id)})
  .then(model => {
    res.json({ success: true, result: model})
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.updateModelById = async (req, res) => {
  const id = req.params.id;
  const { name, capacity, weight } = req.body;

  Model.update({ _id: id },{
    name: name,
    capacity: capacity,
    weight: weight
  })
  .then(model => {
    if (!model) res.json({ success: false, result: "No such model exists"})

    res.json(model)
  })
  .catch(err => {
      res.json({ success: false, result: err})
  })
};

exports.deleteModelById = async (req, res) => {
  const id = req.params.id;

  Model.deleteOne({ _id: id })
  .then(
    res.json({ success: true, result: 'Modelo deletado com sucesso'})
  )
  .catch(err => {
    res.json({ success: false, result: err})
  })
};
