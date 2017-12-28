var NodeWebcam = require('node-webcam')

var opts = {
  width: 640,
  height: 480,
  quality: 100,
  delay: 0,
  saveShots: true,
  output: 'jpeg',
  device: false,
  callbackReturn: 'location',
  verbose: true
}

var Webcam = NodeWebcam.create(opts)
const unixTime = Date.now()
const namePicture = unixTime.toString()

Webcam.capture(namePicture, (err, data) => {
  if (!err) console.log(`Image created ${namePicture}`)
})

Webcam.list((list) => {
  console.log(list)
})
