// Update with your config settings.

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/data/dev.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './src/data/migrations',
        },
        seeds: {
            directory: './src/data/seeds',
        },
        pool: {
            afterCreate: (conn, done) => {
                // runs after a connection is made to the sqlite engine
                conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
            },
        },
    },

    test: {
        client: 'sqlite3',
        connection: {
            filename: './src/data/test.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './src/data/migrations',
        },
        seeds: {
            directory: './src/data/seeds',
        },
        pool: {
            afterCreate: (conn, done) => {
                // runs after a connection is made to the sqlite engine
                conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
            },
        },
    },
};
