import { FastifyRequest, FastifyReply } from 'fastify'
import youtubeDownloadService from '../services/youtubeDownload'

async function download(
  request: FastifyRequest<{ Body: { links: string[]; downloadPath: string } }>,
  reply: FastifyReply
) {
  const musicList = await youtubeDownloadService.downloadYoutubeToMp3(
    request.body
  )
  reply.status(200).send({ message: `${musicList.length} music downloaded` })
}

export default { download }
