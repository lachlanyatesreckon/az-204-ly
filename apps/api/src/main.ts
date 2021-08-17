import * as express from 'express';
import * as cors from 'cors'

import { Message } from '@az-204/api-interfaces';

const app = express();
app.use(cors());

const greeting: Message = { message: 'Hello world, from AZ-204 prep examm' };

app.get('/api', (req, res) => {
  res.send(greeting);
  
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
