import Keys from './keys';
import express from 'express';
import bodyParser from 'body-parser';
import redis from 'redis';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
app.use(cors());
app.use(bodyParser.json);

const pgClient = new Pool({
  user: Keys.pgUser,
  password: Keys.pgPass,
  host: Keys.pgHOST,
  port: Number(Keys.pgPORT),
  database: Keys.pgDB
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err) => console.error(err));
});

const redisClient = redis.createClient({
  host: Keys.redisHost,
  port: Number(Keys.redisPort),
  retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/values/all', async (req, res) => {
  const cursor = await pgClient.query('SELECT * from values');
  res.send(cursor.rows);
});

app.get('/values/current', async (req, res) => {
  redisClient.hgetall('values', (err, values) => {
    res.send(values);
  });
});

app.post('/values', async (req, res) => {
  const index = req.body.index;

  if (Number(index) > 50) {
    return res.status(422).send('Index too large.');
  }

  redisClient.hset('values', index, 'calculating...');
  redisPublisher.publish('insert', index);
  pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);
  res.send({ working: true });
});

app.listen(5000, () => {
  console.log('Listening on 5000');
})
.on('error', (err) => {
  console.log(err);
})
