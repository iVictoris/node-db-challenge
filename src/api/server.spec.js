const request = require('supertest');
const { app: server } = require('./server');
const db = require('../data/knex.config');

const fetchData = (url, method) => {
    return req()[method](url);
};

const req = () => {
    return request(server);
};

beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
});

describe('Project Route', () => {
    describe('/api/projects GET', () => {
        const expectedData = [
            {
                id: 1,
                name: 'bobby',
            },
        ];
        it('should give a 200 status', async () => {
            const response = await req().get('/api/projects');
            expect(response.status).toBe(200);
        });
        it('should have body resembling expectedData', async () => {
            const response = await req().get('/api/projects');
            expect(response.body).toMatchObject(expectedData);
        });
    });
    describe('/api/projects POST', () => {
        const data = {
            name: 'John',
            description: 'Winchester',
            completed: false,
        };
        it('expects status of 201', async () => {
            const response = await req().post('/api/projects').send(data);
            expect(response.status).toBe(201);
        });
        it('object back with id of 5', async () => {
            const response = await req().post('/api/projects').send(data);
            expect(response.body.project.id).toBe(2);
        });
    });
});
describe('Task Route', () => {
    describe('/api/task GET', () => {
        const expectedData = [
            {
                id: 1,
                description: 'some description 1',
                project_id: 1,
                project_name: 'bobby',
                project_description: null,
            },
        ];
        it('should give a 200 status', async () => {
            const response = await req().get('/api/tasks');
            expect(response.status).toBe(200);
        });
        it('should have body resembling expectedData', async () => {
            const response = await req().get('/api/tasks');
            expect(response.body).toMatchObject(expectedData);
        });
    });
    describe('/api/tasks POST', () => {
        const data = {
            description: 'some task 2',
            project_id: 1,
        };
        it('expects status of 201', async () => {
            const response = await req().post('/api/tasks').send(data);
            expect(response.status).toBe(201);
        });
        it('object back with id of 2', async () => {
            const response = await req().post('/api/tasks').send(data);
            expect(response.body.task.id).toBe(2);
        });
    });
});

describe('Resource  Route', () => {
    describe('/api/resources GET', () => {
        const expectedData = [
            {
                id: 1,
                name: 'supernatural season 1-2',
            },
        ];
        it('should give a 200 status', async () => {
            const response = await req().get('/api/resources');
            expect(response.status).toBe(200);
        });
        it('should have body resembling expectedData', async () => {
            const response = await req().get('/api/resources');
            expect(response.body).toMatchObject(expectedData);
        });
    });
    describe('/api/resources POST', () => {
        const data = {
            name: 'supernatural season 3',
        };
        it('expects status of 201', async () => {
            const response = await req().post('/api/resources').send(data);
            expect(response.status).toBe(201);
        });
        it('object back with id of 2', async () => {
            const response = await req().post('/api/resources').send(data);
            expect(response.body.resource.id).toBe(2);
        });
    });
});
