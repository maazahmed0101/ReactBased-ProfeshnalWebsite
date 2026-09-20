const isPresent = (value) =>
  value !== undefined && value !== null && String(value).trim() !== '';

const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateUser = (data) => {
  const errors = [];

  if (!isPresent(data.name) || String(data.name).trim().length < 2) {
    errors.push('name is required and must be at least 2 characters long');
  }

  if (!isPresent(data.email) || !isEmailValid(data.email)) {
    errors.push('email is required and must be a valid email address');
  }

  if (!isPresent(data.password) || String(data.password).length < 6) {
    errors.push('password is required and must be at least 6 characters long');
  }

  if (!isPresent(data.role) || !['customer', 'admin'].includes(data.role)) {
    errors.push('role is required and must be either "customer" or "admin"');
  }

  return errors;
};

const validateUserUpdate = (data) => {
  const errors = [];

  if (data.name !== undefined && String(data.name).trim().length < 2) {
    errors.push('name must be at least 2 characters long');
  }

  if (data.email !== undefined && !isEmailValid(data.email)) {
    errors.push('email must be a valid email address');
  }

  if (data.password !== undefined && String(data.password).length < 6) {
    errors.push('password must be at least 6 characters long');
  }

  if (data.role !== undefined && !['customer', 'admin'].includes(data.role)) {
    errors.push('role must be either "customer" or "admin"');
  }

  return errors;
};

module.exports = { validateUser, validateUserUpdate };