const { API_KEY } = require('../config/apiKey');

const apiKeyAuth = (req, res, next) => {
  const providedKey = req.query.api_key;

  if (!providedKey) {
    return res.status(401).json({
      status: 'error',
      message: 'API key is required. Provide it as ?api_key=your-key'
    });
  }

  if (providedKey !== API_KEY) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid API key. Access denied.'
    });
  }

  next();
};

module.exports = apiKeyAuth;