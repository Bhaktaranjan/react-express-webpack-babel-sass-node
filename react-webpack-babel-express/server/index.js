const path = require('path');
const express = require('express');
const app = express();
const port = process.env.port || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const mockData = {
    name: 'Bhaktaranjan',
    role: 'Technical Lead'
};

app.use(express.static(DIST_DIR));

app.get('/api', (req, res) => {
    res.send(mockData);
});

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(port, function() {
    console.log('App listening on port ' + port);
});