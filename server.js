// SERVIDOR
const express = require('express');
// TEMPLATE NAME
const nunjucks = require('nunjucks');


const server = express();

// BUSCA ONDE ESTÃO ARQUIVOS ESTATICOS
server.use(express.static('public'));

//caracteriza a extensão do arquivo
server.set("view engine", "njk");

//pasta onde fica os arquivos estáticos
nunjucks.configure("views", {
    express:   server
})

// ######ROTAS########
server.get( "/" ,  function(req, res) {
        return res.render("about");
});
server.get( "/teste" ,  function(req, res) {
        return res.render("teste");
});
server.get( "/projects" ,  function(req, res) {
        return res.render("projects");
});

server.listen(5001, function () {
    console.log('listening on port 5001');
});