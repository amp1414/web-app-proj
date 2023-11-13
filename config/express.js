var express = require('express');

module.exports = function()
{
    let app = express();
    
    app.set('views', '../app/views');
    app.set('view engine', 'ejs');

    return app;
}