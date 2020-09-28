const Syndicate = require('../../database/models/Syndicate');
const ObjectId = require('mongodb').ObjectId;

exports.createSyndicate = async (req, res) => {
  const { name } = req.body;

  let syndicate = new Syndicate({
    name: name
  })

  syndicate.save()
  .then(result => {
    res.json({ success: true, result: result})
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.listAllSyndicate = async (req, res) => {
  Syndicate.find()
  .then(syndicate => {
    res.json(syndicate)
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.findSyndicateById = async (req, res) => {
  const syndicate_id = req.params.id;

  Syndicate.find({_id: ObjectId(syndicate_id)})
  .then(syndicate => {
    res.json({ success: true, result: syndicate})
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.updateSyndicateById = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  Syndicate.update({ _id: id },{
    name: name
  })
  .then(syndicate => {
    if (!syndicate) res.json({ success: false, result: "No such syndicate exists"})

    res.json(syndicate)
  })
  .catch(err => {
      res.json({ success: false, result: err})
  })
};

exports.deleteSyndicateById = async (req, res) => {
  const id = req.params.id;

  Syndicate.deleteOne({ _id: id })
  .then(
    res.json({ success: true, result: 'Sindicato deletado com sucesso'})
  )
  .catch(err => {
    res.json({ success: false, result: err})
  })
};
