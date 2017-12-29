var fs = require('fs')
var request = require('request')

var options = { method: 'POST',
  url: 'https://api.telegram.org/bot375684279:AAGAHfgCU5jIeYGPx26Nxv5AbCUaNBdSHQ0/sendVideo',
  headers: { 'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
  formData: {
    chat_id: '147224768',
    video: {
      value: fs.createReadStream('/home/vitor/Documents/App/webcam-guard/ffmpeg/videos/29-12-17_14:15:13.mp4'),
      options: {
        filename: '/home/vitor/Documents/App/webcam-guard/ffmpeg/videos/29-12-17_14:15:13.mp4',
        contentType: null
      }
    }
  }
}

request(options, function (error, response, body) {
  if (error) throw new Error(error)

  console.log(body)
})
