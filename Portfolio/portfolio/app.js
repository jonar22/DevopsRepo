const express = require('express');
const path = require('path');
const app = express();
 
// Serve static files from the directory containing server.js
app.use(express.static(__dirname));
 
// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
 
app.listen(3000, function () {
    console.log('App listening on port 3000');
});