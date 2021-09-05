//Install express server
const express = require('express');
const path = require('path');
//compression is not working, still kept code to be edited later
//const compression = require('compression')
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/Calendar-UI'));

//app.use(compression())
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Calendar-UI/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);