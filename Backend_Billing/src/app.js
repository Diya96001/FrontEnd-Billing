require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/billing.route');

const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes: mount billings router at /api/billings
app.use('/api/billings', routes);


app.get('/', (req, res) => {
	res.json({ status: 'ok', message: 'Backend_Billing root', api: '/api' });
});
 

// 404
app.use(notFound);

// Error handler
app.use(errorHandler);

module.exports = app;
