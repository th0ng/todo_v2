const request = require('supertest');

const app = require('../src/app');

const tasks = [
  {
    id: 1,
    task: 'Wake up',
  },
  {
    id: 2,
    task: 'Get coffee',
  },
  {
    id: 3,
    task: 'Go back to sleep',
  },
];

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏'
      }, done);
  });
});

describe('GET /api/v1/emojis', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/emojis')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['😀', '😳', '🙄'], done);
  });
});

describe('GET /api/v1/tasks', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, tasks, done);
  });
});
