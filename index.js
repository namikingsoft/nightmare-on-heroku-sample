const fs = require('fs');
const app = require('express')();
const Nightmare = require('nightmare');

app.get('/', (req, res) => {
  const imageFilePath = 'screenshot.png';
  Nightmare()
  .goto('http://example.com')
  .wait()
  .screenshot(imageFilePath)
  .end()
  .then(() => new Promise((resolve, reject) =>
    fs.readFile(imageFilePath, (err, data) => err ? reject(err) : resolve(data))
  ))
  .then(data => res.set('Content-Type', 'image/png').send(data));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Started Server`);
});
