import express from 'express';
import dotenv from 'dotenv';

import countryRoutes from './routes/countryRoutes';

const app = express();

// Middleware to allow us pull req.body.<params>
app.use(express.json());

// get the port number from .env file
dotenv.config();

// Use country routes
app.use(countryRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Authorization Server running on ${port}`);
})
