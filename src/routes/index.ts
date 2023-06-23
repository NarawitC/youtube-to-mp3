import { FastifyInstance, RouteHandlerMethod } from 'fastify'
import youtubeDownloadRouter from './youtubeDownload'

//create router for each route
async function routes(fastify: FastifyInstance) {
  fastify.register(youtubeDownloadRouter, { prefix: '/youtube_download' })
}

export default routes
