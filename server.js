const express = require('express');
const server = express();

// ROTAS
server.get( "/home" ,  function(req, res) {
        return res.send("ok,  are you? how are you name?");
})

server.listen(5001, function () {
    console.log('listening on port');
});