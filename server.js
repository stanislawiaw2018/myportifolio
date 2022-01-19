const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// BUSCA ONDE ESTÃO ARQUIVOS ESTATICOS
server.use(express.static('public'));

//caracteriza a extensão do arquivo
server.set("view engine", "html");

//pasta onde fica os arquivos estaticos
nunjucks.configure("views", {
    express:   server
})

// ######ROTAS########
server.get( "/" ,  function(req, res) {
        return res.render("index");
});
server.get( "/projects" ,  function(req, res) {
        return res.render("projects");
});

server.listen(5001, function () {
    console.log('listening on port');
});