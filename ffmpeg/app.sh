#!/bin/bash

fileName=$(date +"%d-%m-%y_%H:%M:%S")

ffmpeg -f v4l2 -framerate 25 -t '10' -video_size 640x480 -i /dev/video0 $fileName.mp4

echo $fileName