const products = require('../data/products');

const parseId = (param) => Number(param);
const isValidId = (id) => Number.isInteger(id) && id > 0;

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Products fetched successfully',
    count: products.length,
    data: products
  });
};

exports.getSingleProduct = (req, res) => {
  const id = parseId(req.params.id);

  if (!isValidId(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid product ID. ID must be a positive integer.'
    });
  }

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: `Product with id ${id} not found`
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Product fetched successfully',
    data: product
  });
};

exports.addProduct = (req, res) => {
  const { name, category, price, stock } = req.body;
  const id = products.length ? products[products.length - 1].id + 1 : 1;

  const newProduct = {
    id,
    name,
    category,
    price: Number(price),
    stock: Number(stock)
  };

  products.push(newProduct);

  res.status(201).json({
    status: 'success',
    message: 'Product created successfully',
    data: newProduct
  });
};

exports.updateProduct = (req, res) => {
  const id = parseId(req.params.id);

  if (!isValidId(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid product ID. ID must be a positive integer.'
    });
  }

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: `Product with id ${id} not found`
    });
  }

  const { name, category, price, stock } = req.body;
  const updatedProduct = { ...products[index] };

  if (name !== undefined) updatedProduct.name = name;
  if (category !== undefined) updatedProduct.category = category;
  if (price !== undefined) updatedProduct.price = Number(price);
  if (stock !== undefined) updatedProduct.stock = Number(stock);

  products[index] = updatedProduct;

  res.status(200).json({
    status: 'success',
    message: 'Product updated successfully',
    data: products[index]
  });
};

exports.deleteProduct = (req, res) => {
  const id = parseId(req.params.id);

  if (!isValidId(id)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid product ID. ID must be a positive integer.'
    });
  }

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: `Product with id ${id} not found`
    });
  }

  const [deletedProduct] = products.splice(index, 1);

  res.status(200).json({
    status: 'success',
    message: 'Product deleted successfully',
    data: deletedProduct
  });
};