const knex = require('knex');

const config = require('../../knexfile');

// if the environment variable is not set, default to 'development'
// this variable is only set when running the "test" npm script using npm run test
const env = process.env.NODE_ENV || 'development';

module.exports = knex(config[env]);
