#!/bin/bash

fileName=$(date +"%d-%m-%y_%H:%M:%S")
pwd=$(pwd)

ffmpeg -y -f alsa -ac 2 -t '30' -i pulse -acodec pcm_s16le -f v4l2 -framerate 25 -t '30' -video_size 640x480 -i /dev/video0 /$pwd/videos/$fileName.mp4

echo $fileName.mp4

# ffmpeg -y -f alsa -ac 2 -t '30' -i pulse -acodec pcm_s16le -f v4l2 -framerate 25 -t '30' -video_size 640x480 -i /dev/video0 vaaaai.mp4
