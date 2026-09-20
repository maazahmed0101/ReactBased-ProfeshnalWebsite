const isPresent = (value) =>
  value !== undefined && value !== null && String(value).trim() !== '';

const validateProduct = (data) => {
  const errors = [];

  if (!isPresent(data.name) || String(data.name).trim().length < 2) {
    errors.push('name is required and must be at least 2 characters long');
  }

  if (!isPresent(data.category) || String(data.category).trim().length < 2) {
    errors.push('category is required and must be at least 2 characters long');
  }

  if (!isPresent(data.price) || Number(data.price) <= 0 || isNaN(Number(data.price))) {
    errors.push('price is required and must be a number greater than 0');
  }

  if (!isPresent(data.stock) || Number(data.stock) < 0 || isNaN(Number(data.stock))) {
    errors.push('stock is required and must be a number greater than or equal to 0');
  }

  return errors;
};

const validateProductUpdate = (data) => {
  const errors = [];

  if (data.name !== undefined && String(data.name).trim().length < 2) {
    errors.push('name must be at least 2 characters long');
  }

  if (data.category !== undefined && String(data.category).trim().length < 2) {
    errors.push('category must be at least 2 characters long');
  }

  if (data.price !== undefined && (isNaN(Number(data.price)) || Number(data.price) <= 0)) {
    errors.push('price must be a number greater than 0');
  }

  if (data.stock !== undefined && (isNaN(Number(data.stock)) || Number(data.stock) < 0)) {
    errors.push('stock must be a number greater than or equal to 0');
  }

  return errors;
};

module.exports = { validateProduct, validateProductUpdate };