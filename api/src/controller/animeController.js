import { alterarAnime, consultarAnime, deletarAnime, inserirAnime } from "../repository/animeRepository.js";

import { Router } from "express";

const server = Router();



server.post('/anime/cadastro', async (req, resp) => {
    try {
        const anime = req.body;
        
        if(!anime.nome) {
            throw new Error("Insira um nome");
        }
        if(!anime.sinopse) {
            throw new Error("Insira uma sinopse");
        }
        if(!anime.lancamento) {
            throw new Error("Insira uma data");
        }

        const resposta = await inserirAnime(anime);

        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})


server.put('/anime/alterar/:id', async (req, resp) => {
    try {
        const anime = req.body;
        const { id } = req.params;

        const resposta = alterarAnime(anime, id);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/anime/consulta', async (req, resp) => {
    try {
        const resposta = await consultarAnime();

        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})


server.delete('/anime/deletar/:id', async (req, resp) => {
    try {
        const { anime }= req.params;
        const resposta = await deletarAnime(anime);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

export default server;