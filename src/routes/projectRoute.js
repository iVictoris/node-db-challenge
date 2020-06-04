const { Router } = require('express');
const router = Router();
const { projects: db } = require('../data/models/projects');

// base route
router
    .route('/')
    .get(async (req, res) => {
        const projects = await db.find();
        res.status(200).json(projects);
    })
    .post(async ({ body }, res) => {
        const { name, description, completed } = body;
        if (!name) return res.status(400).json({ message: 'missing name' });
        try {
            const project = await db.add({ name, description, completed });
            res.status(201).json({ project });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: 'server oofs' });
        }
    });

module.exports.router = router;
