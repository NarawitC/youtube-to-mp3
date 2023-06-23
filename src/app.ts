import Fastify, { FastifyInstance, RouteHandlerMethod } from 'fastify'
import cors from '@fastify/cors'
const fastify: FastifyInstance = Fastify({
  logger: true,
})
const PORT: string = process.env.PORT || '8000'

// const rootHandler: RouteHandlerMethod = async (request, reply) => {
//   reply.send({ message: 'Hello, Fastify with TypeScript!' })
// }

// fastify.get('/', rootHandler)
fastify.register(cors, {
  // origin: (origin, cb) => {
  //   const hostname = new URL(origin)
  //   if (hostname === 'localhost') {
  //     //  Request from localhost will pass
  //     cb(null, true)
  //     return
  //   }
  //   // Generate an error on other origins, disabling access
  //   cb(new Error('Not allowed'), false)
  // },\
  origin: true,
})
fastify.register(import('./routes/index'), { prefix: '/api/v1.0' })

const start = async () => {
  try {
    await fastify.listen({ port: parseInt(PORT) })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
