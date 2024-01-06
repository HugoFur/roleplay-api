import supertest from 'supertest'
import test from 'japa'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
test.group('Users', () => {
  test('it should create an user', async () => {
    const userPayload = {
      email: 'test@test.com',
      username: 'test',
      password: 'test',
    }
    await supertest(BASE_URL)
      .post('/users')
      .send(userPayload)
      .expect(201)
      .then((response) => {
        assert.exists(response.body.user)
        assert.exists(response.body.token)
      })
  })
})
