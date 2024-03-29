import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import '../database/dbConnection.js'
import middleware from './middleware.js';
import router from './router.js';


const app = express();
const port = 3002;

app.use(cors());
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
  });
  
app.use(express.json());
app.use(middleware);
app.use(router);

async function start() {
  const timelog = new Date();
  const server = app.listen(port, async () => {
    console.log(`SERVERLOG ${timelog} --> Server started on port ${port}.`);
  });

  process.on('unhandledRejection', err => {
    const timelog = new Date();
    console.error(`SERVERLOG ${timelog} --> Server has closed. An error occurred: ${err}`)
    server.close(() => process.exit(1))
  });
}

start();
