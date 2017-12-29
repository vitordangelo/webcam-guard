const { exec } = require('child_process')
var fs = require('fs')
var request = require('request')

async function execute () {
  try {
    await executer()
  } catch (error) {
    console.log(error)
  }
}

execute()

function executer () {
  exec('./app.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }

    console.log(`stdout: ${stdout}`)
    async function send (stdout) {
      try {
        await sender(stdout)
      } catch (error) {
        console.log(error)
      }
    }
    send(stdout)
  })
}

function sender (stdout) {
  const videoPath = `/home/vitor/Documents/App/webcam-guard/ffmpeg/videos/${stdout}`
  const videoPathFilter = videoPath.replace(/\s/g, '')
  setTimeout(() => {
    var options = { method: 'POST',
      url: 'https://api.telegram.org/bot375684279:AAGAHfgCU5jIeYGPx26Nxv5AbCUaNBdSHQ0/sendVideo',
      headers: { 'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
      formData: {
        chat_id: '147224768',
        video: {
          value: fs.createReadStream(videoPathFilter),
          options: {
            filename: videoPathFilter,
            contentType: null
          }
        }
      }
    }

    request(options, function (error, response, body) {
      if (error) throw new Error(error)
      console.log(body)
    })
    console.log('oi')
  }, 60000)
}
