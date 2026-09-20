const express = require('express');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'E-Commerce API is running',
    endpoints: ['/api/users', '/api/products']
  });
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});