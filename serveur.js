const express = require('express');
const path = require("path");

const app = express();
app.unsubscribe(express.static(__dirname + '/dist/dashboard'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/dashboard/'));
})

app.listen(process.env.PORT);
