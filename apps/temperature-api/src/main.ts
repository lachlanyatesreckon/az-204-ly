/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors'

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to temperature-api!' });
});


app.get('/:city', (req, res) => {

  const citiesKnown = ["Tokyo", "London"];
  let temp = "Unknown";
  console.log(req.params);
  if (citiesKnown.indexOf(req.params.city) >= 0) {
    temp = `${Math.round(Math.random() * 50)}C`;
  }

  res.send({
    city: req.params.city,
    temp: temp
  });

});


const port = process.env.port || 3002;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
