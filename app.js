const express = require('express');
const app = express();
const ffmpeg = require('fluent-ffmpeg');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the video streaming platform');
});

app.get('/stream/:video', (req, res) => {
  const videoPath = `path/to/videos/${req.params.video}.mp4`;

  // Set the content type for streaming
  res.contentType('video/mp4');

  // Pipe the video to the response stream
  ffmpeg()
    .input(videoPath)
    .videoCodec('libx264')
    .audioCodec('aac')
    .format('mp4')
    .pipe(res, { end: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
