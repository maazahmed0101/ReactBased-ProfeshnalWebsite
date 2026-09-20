const users = require('../data/users');

const parseId = (param) => Number(param);
const isValidId = (id) => Number.isInteger(id) && id > 0;

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Users fetched successfully',
    count: users.length,
    data: users
  });
};

exports.getSingleUser = (req, res) => {
  const id = parseId(req.params.id);

  if (!isValidId(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid user ID. ID must be a positive integer.'
    });
  }

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `User with id ${id} not found`
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'User fetched successfully',
    data: user
  });
};

exports.addUser = (req, res) => {
  const { name, email, password, role } = req.body;
  const id = users.length ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id,
    name,
    email,
    password,
    role,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);

  res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    data: newUser
  });
};

exports.updateUser = (req, res) => {
  const id = parseId(req.params.id);

  if (!isValidId(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid user ID. ID must be a positive integer.'
    });
  }

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: `User with id ${id} not found`
    });
  }

  const { name, email, password, role } = req.body;

  users[index] = { ...users[index], name, email, password, role };

  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    data: users[index]
  });
};

exports.deleteUser = (req, res) => {
  const id = parseId(req.params.id);

  if (!isValidId(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid user ID. ID must be a positive integer.'
    });
  }

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: `User with id ${id} not found`
    });
  }

  const [deletedUser] = users.splice(index, 1);

  res.status(200).json({
    status: 'success',
    message: 'User deleted successfully',
    data: deletedUser
  });
};