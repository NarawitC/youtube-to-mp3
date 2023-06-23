// import { ytDownloader } from '@derimalec/ytdl-to-mp3';
import fs from 'fs'
import ytdl from 'ytdl-core'

async function downloadYoutubeToMp3(links: string[]) {
  try {
    const youtubePath =
      'https://www.youtube.com/watch?v=q5nAxoCIvy4&ab_channel=ChrrissaChotijirasathit'

    const filePath = './'
    function waitUntil(condition: Boolean) {
      return new Promise((resolve) => {
        const checkCondition = async () => {
          while (condition) {
            await new Promise((resolve) => setTimeout(resolve, 100)) // Adjust the delay as needed
          }
          resolve('')
        }

        checkCondition()
      })
    }

    let isWriteFileSuccess = false
    console.log('downloadYoutubeToMp3')

    const writeStream = fs.createWriteStream('D:/test.mp4')
    const result = await ytdl(youtubePath, {
      quality: 'highest',
      // filter: 'audioonly',
    }).pipe(writeStream)

    writeStream.on('finish', () => {
      isWriteFileSuccess = true
      console.log('File write stream has finished.')
    })

    writeStream.on('error', (error) => {
      throw error
    })

    await (async () => {
      console.log('Waiting for condition to be true...')
      await waitUntil(isWriteFileSuccess)
      console.log('Condition is now true!')
      // Continue with your code after the condition is true
    })()
    console.log('final')

    // console.log('File write stream has finished.');
  } catch (error) {
    console.log(error)
  }
}

export default { downloadYoutubeToMp3 }
