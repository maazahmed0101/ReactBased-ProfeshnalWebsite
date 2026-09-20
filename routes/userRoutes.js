const express = require('express');

const {
  getAllUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const apiKeyAuth = require('../middleware/apiKeyAuth');
const validate = require('../middleware/validate');
const { validateUser, validateUserUpdate } = require('../validators/userValidator');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);

router.post('/', validate(validateUser), addUser);

router.put('/:id', apiKeyAuth, validate(validateUserUpdate), updateUser);

router.delete('/:id', apiKeyAuth, deleteUser);

module.exports = router;