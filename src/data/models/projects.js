const { configureDb } = require('./universal');

module.exports.projects = configureDb('projects');
