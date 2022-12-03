import express from 'express';
import { populateSalesDbByMonthController, getSalesByMonthController } from './controllers.js';
import 'express-async-errors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3001;

app.post('/sales', populateSalesDbByMonthController);
app.get('/sales', getSalesByMonthController);

// Error handler
app.use((err, _req, res, _next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

app.listen(port, () => console.log(`Running on port ${port}`));
