exports.seed = async function (knex) {
    return await knex('tasks').insert([
        {
            description: 'some description 1',
            project_id: 1,
        },
    ]);
};
