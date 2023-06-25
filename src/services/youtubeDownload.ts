import fs from 'fs'
import ytdl from 'ytdl-core'

async function downloadYoutubeToMp3({
  links,
         downloadPath = './',
}: {
  links: string[]
  downloadPath: string
}) {
  try {
    const download = async (link: string) => {
      try {
        const videoInfo = await ytdl.getInfo(link)
        const title = videoInfo.videoDetails.title.replace(/[ |/\\.]/g, '')
        return new Promise((resolve, reject) => {
          const writeStream = fs.createWriteStream(
            `${downloadPath}${title}.mp3`
          )
          const result = ytdl(link, {
            quality: 'highest',
            filter: 'audioonly',
          }).pipe(writeStream)

          writeStream.on('finish', () => {
            resolve(result)
          })

          writeStream.on('error', (error) => {
            reject(error)
          })
        })
      } catch (error) {
        throw error
      }
    }
    return await Promise.all(links.map((link) => download(link)))
  } catch (error) {
    throw error
  }
}

export default { downloadYoutubeToMp3 }
