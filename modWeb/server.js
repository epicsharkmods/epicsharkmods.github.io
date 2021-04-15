const express = require('express');
const app = express()
const http = require('http').Server(app);

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});
app.get('/gallery', (req, res)=> {
	res.sendFile(__dirname + '/public/gallery.html')
})

http.listen(3000, () => {
  console.log('server started');
});