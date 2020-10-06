const Employee = require('../../database/models/Employee');
const ObjectId = require('mongodb').ObjectId;

exports.createEmployee = async (req, res) => {
  const { syndicate_id, name, address, phone, salary } = req.body;

  let employee = new Employee({
    name: name,
    address: address,
    phone: phone,
    salary: salary,
    syndicate_id: syndicate_id
  })

  employee.save()
  .then(result => {
    res.json({ success: true, result: result})
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.listAllEmployees = async (req, res) => {
  Employee.find()
  .then(employee => {
    res.json(employee)
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.findEmployeeById = async (req, res) => {
  const id = req.params.id;

  Employee.find({_id: ObjectId(id)})
  .then(employee => {
    res.json({ success: true, result: employee})
  })
  .catch(err => {
    res.json({ success: false, result: err})
  })
};

exports.updateEmployeeById = async (req, res) => {
  const id = req.params.id;
  const { syndicate_id, name, address, phone, salary } = req.body;

  Employee.update({ _id: id },{
    syndicate_id: syndicate_id,
    name: name,
    address: address,
    phone: phone,
    salary: salary
  })
  .then(employee => {
    if (!employee) res.json({ success: false, result: "No such employee exists"})

    res.json(employee)
  })
  .catch(err => {
      res.json({ success: false, result: err})
  })
};

exports.deleteEmployeeById = async (req, res) => {
  const id = req.params.id;

  Employee.deleteOne({ _id: id })
  .then(
    res.json({ success: true, result: 'Empregado deletado com sucesso'})
  )
  .catch(err => {
    res.json({ success: false, result: err})
  })
};
