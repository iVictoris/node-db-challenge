exports.seed = async function (knex) {
    return await knex('projects').insert([
        {
            name: 'bobby',
        },
    ]);
};
