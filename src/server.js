import express from 'express';
import 'dotenv/config';
import 'express-async-errors';

const app = express();
const port = process.env.PORT || 3001;

// Error handler
app.use((err, _req, res, _next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

app.listen(port, () => console.log(`Running on port ${port}`));
