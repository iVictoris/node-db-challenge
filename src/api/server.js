const express = require('express');
const app = express();

const { router: projectRouter } = require('../routes/projectRoute');
const { router: resourceRouter } = require('../routes/resourceRoute');
const { router: taskRouter } = require('../routes/taskRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/projects', projectRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/tasks', taskRouter);

module.exports.app = app;
