const { configureDb } = require('./universal');
const db = require('../knex.config');

const find = () => {
    return db('tasks as t')
        .select(
            't.id',
            't.description as description',
            'p.description as project_description',
            'p.id as project_id',
            'p.name as project_name',
        )
        .join('projects as p', 't.project_id', '=', 'p.id');
};

const add = (data) => {
    return db('tasks')
        .insert(data)
        .then(([id]) =>
            db('tasks as t')
                .select(
                    't.id',
                    't.description as description',
                    'p.description as project_description',
                    'p.id as project_id',
                    'p.name as project_name',
                )
                .join('projects as p', 't.project_id', '=', 'p.id')
                .where({ 't.id': id })
                .first(),
        );
};

module.exports.tasks = {
    find,
    add,
};
