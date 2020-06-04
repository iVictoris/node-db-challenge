exports.up = function (knex) {
    return knex.schema
        .createTable('projects', (table) => {
            table.increments();
            table.text('name').notNullable();
            table.text('description');
            table.boolean('completed').notNullable().defaultTo(false);
        })
        .createTable('tasks', (table) => {
            table.increments();
            table.text('description');
            table.text('notes');
            table.boolean('completed').defaultTo(false);
            table
                .integer('project_id')
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('resources', (table) => {
            table.increments();
            table.text('name').notNullable();
            table.text('description');
        })
        .createTable('project_resources', (table) => {
            table
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table
                .integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resources.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table.primary(['project_id', 'resource_id']);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
