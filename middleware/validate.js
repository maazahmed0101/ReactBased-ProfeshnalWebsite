const validate = (rules) => (req, res, next) => {
  const errors = rules(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors
    });
  }

  next();
};

module.exports = validate;