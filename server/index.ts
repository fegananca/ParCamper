import express, { Express } from 'express';
import cors from 'cors';
import router from './router/router';

const PORT = 3001;

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
