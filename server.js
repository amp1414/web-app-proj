const myExpress = require("./config/express");

function Start() {    
    const app = myExpress();
    app.listen(3000);
    
    const express = require('express');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res, next) => {
        res.send("{\"message\": \"Welcome to Dress store application.\"}");
        next();
    });
    console.log("Server started on http://localhost:3000");
    module.exports = app;
}

Start();