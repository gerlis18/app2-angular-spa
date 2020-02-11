const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static('./dist/app2'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/app2/index.html'));
})

app.listen(process.env.PORT || 3000, onStartServer);

function onStartServer() {
  console.log('listening');
}