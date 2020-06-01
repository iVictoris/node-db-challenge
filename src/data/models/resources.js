const { configureDb } = require('./universal');

module.exports.resources = configureDb('resources');
