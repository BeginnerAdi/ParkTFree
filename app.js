const express = require('express');
const app = express();

app.use((request, response, next) => {
    response.status(200).json({
        messages: 'Working!'
    });
});

module.exports = app;