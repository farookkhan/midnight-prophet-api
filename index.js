/* eslint-disable no-console */
process.env.NODE_ENV !== 'production' && require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const createApp = require('./server/express');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ohs';
const PORT = process.env.PORT || 1337;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if(err) {
    console.error(err);
    process.exit(1);  
  }

  const app = createApp(db);
  app.listen(PORT, () => {
    console.log('listening on port: ' + PORT);
  });
});
