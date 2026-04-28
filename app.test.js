const request = require('supertest');
const app = require('./app');

test('GET/ devuelve mensaje', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Esta es una respuesta sencilla');
});