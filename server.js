//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/calendar-ui'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/calendar-ui/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);