import Fastify, { FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import routes from './routes/index'
const fastify: FastifyInstance = Fastify({
  logger: true,
})
const PORT: string = process.env.PORT || '8000'

fastify.register(cors, {
  origin: ['http://localhost:3000'],
})
fastify.register(routes, { prefix: '/api/v1.0' })

const start = async () => {
  try {
    await fastify.listen({ port: parseInt(PORT) })
    console.log('\n', '------------------')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
