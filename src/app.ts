import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();



// Middleware to allow us pull req.body.<params>
app.use(express.json());

// get the port number from .env file
dotenv.config();
const port = process.env.PORT || 3000;

// Create HTTP server

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end("Hello, world!");
})

server.listen(port, () => {
    console.log(`Authorization Server running on ${port}`);
})
