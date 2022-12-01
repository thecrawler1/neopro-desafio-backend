import express from 'express';
import 'dotenv/config';

const app = express();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Running on port ${port}`));
