exports.seed = async function (knex) {
    return await knex('resources').insert([
        {
            name: 'supernatural season 1-2',
        },
    ]);
};
