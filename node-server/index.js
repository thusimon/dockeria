const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({
  host: 'redis-server',
  port: 6379
});
redisClient.set('visits', '1');

app.get('/', (req, resp) => {
  redisClient.get('visits', (err, visits) => {
    resp.send(`Hi there! You are ${visits} visitor`);
    redisClient.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
