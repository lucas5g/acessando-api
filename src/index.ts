import { Elysia } from 'elysia'

new Elysia()
  .get('/', { api: 'test api 2023'})
  .get('/hello', 'Do you miss me?')
  .listen(3001, () => console.log(`Server is running on port http://localhost:3001`))