const { Router } = require('express');
const router = Router();
const { resources: db } = require('../data/models/resources');

// base route
router
    .route('/')
    .get(async (req, res) => {
        const resources = await db.find();
        res.status(200).json(resources);
    })
    .post(async ({ body }, res) => {
        const { name, description } = body;
        if (!name) return res.status(400).json({ message: 'missing name' });
        try {
            const resource = await db.add({ name, description });
            res.status(201).json({ resource });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: 'server oofs' });
        }
    });

module.exports.router = router;
