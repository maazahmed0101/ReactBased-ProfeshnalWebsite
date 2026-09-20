const express = require('express');

const {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const apiKeyAuth = require('../middleware/apiKeyAuth');
const validate = require('../middleware/validate');
const {
  validateProduct,
  validateProductUpdate
} = require('../validators/productValidator');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);

router.post('/', apiKeyAuth, validate(validateProduct), addProduct);

router.put('/:id', apiKeyAuth, validate(validateProductUpdate), updateProduct);

router.delete('/:id', apiKeyAuth, deleteProduct);

module.exports = router;