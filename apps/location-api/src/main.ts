/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors'

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to location-api!' });
});


app.get('/', (req, res) => {
  res.send({
    "locations" : ["Tokyo",
    "London"]
  });

});


const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
