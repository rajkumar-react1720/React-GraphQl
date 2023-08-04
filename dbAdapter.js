require('dotenv').config();

const pgPromise = require('pg-promise');
const connectionString = `${process.env.DATABASE_URL}`
const pg_promise = pgPromise({});
const pgConnection = pg_promise(connectionString);
exports.pgConnection = pgConnection;