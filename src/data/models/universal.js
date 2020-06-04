const db = require('../knex.config');

const configureDb = (table) => {
    const find = () => {
        return db(table);
    };

    const findById = (id) => {
        return db(table).where({ id }).first();
    };

    const update = (id, changes) => {
        return db(table).where({ id }).update(changes);
    };

    const add = async (model) => {
        const [id] = await db(table).insert(model);
        return findById(id);
    };

    const remove = (id) => {
        return db(table).where({ id }).del();
    };

    return {
        find,
        add,
    };
};

module.exports.configureDb = configureDb;
