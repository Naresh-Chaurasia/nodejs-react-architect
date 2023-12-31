const { greenBright } = require('chalk');
const express = require('express');
const debug = require('debug')('app:adminRouter');
const { MongoClient } = require('mongodb');
const sessions = require('../data/sessions.json');

const adminRouter = express.Router();

adminRouter.route('/').get((req, res) => {
  const url =
    'mongodb://localhost:27017';
  const dbName = 'jmiller';

  debug('Inside mongo DB');

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      debug('Connected to the mongo DB');

      const db = client.db(dbName);

      const response = await db.collection('sessions').insertMany(sessions);
      res.json(response);
    } catch (error) {
      debug(error.stack);
    }
    finally {
        // Close the client in a finally block to ensure it's always executed
        if (client) {
          client.close();
        }
      }
  })();
});

module.exports = adminRouter;