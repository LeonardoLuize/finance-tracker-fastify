import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.addHook('preHandler', async (req, reply) => {
  console.log(`[${req.method}] ${req.url}`)
})

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
