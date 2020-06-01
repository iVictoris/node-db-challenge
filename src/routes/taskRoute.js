const { Router } = require('express');
const router = Router();
const { tasks: db } = require('../data/models/tasks');

// base route
router
    .route('/')
    .get(async (req, res) => {
        const tasks = await db.find();
        res.status(200).json(tasks);
    })
    .post(async ({ body }, res) => {
        const { notes, description, project_id, completed } = body;
        if (!description)
            return res.status(400).json({ message: 'missing description' });
        try {
            const task = await db.add({
                notes,
                description,
                project_id,
                completed,
            });
            res.status(201).json({ task });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: 'server oofs' });
        }
    });

module.exports.router = router;
