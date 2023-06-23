import { FastifyInstance, RouteHandlerMethod } from 'fastify'
import youtubeDownloadController from '../controllers/youtubeDownload'

async function routes(fastify: FastifyInstance) {
  fastify.post('/download', youtubeDownloadController.download)
}

export default routes
