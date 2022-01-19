const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set("view engine", "html");

nunjucks.configure("views", {
    express:   server
})

// ROTAS
server.get( "/home" ,  function(req, res) {
        return res.send("ok,  are you? how are you name?");
});

server.listen(5001, function () {
    console.log('listening on port');
});