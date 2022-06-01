const express = require('express');
//App setup
const app = express();

const server = app.listen(4000, function() {
    console.log('listening for requests on port 4000');
});