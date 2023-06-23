import { FastifyRequest, FastifyReply } from 'fastify'
import youtubeDownloadService from '../services/youtubeDownload'

async function download(
  request: FastifyRequest<{ Body: { links: string[] } }>,
  reply: FastifyReply
) {
  await youtubeDownloadService.downloadYoutubeToMp3(request.body.links)
}

export default { download }
