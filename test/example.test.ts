import { afterAll, beforeAll, test } from 'vitest'
import { app } from '../src/app'
import request from 'supertest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('User can create a new transaction?', async () => {
  await request(app.server)
    .post('/transactions')
    .send({ title: 'new transaction', amount: 5000, type: 'credit' })
    .expect(201)
})

test('User can not fetch a transaction without a session_id?', async () => {
  await request(app.server).get('/transactions').expect(401)
})
