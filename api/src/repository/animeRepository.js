import { con } from './connection.js';


export async function inserirAnime(anime) {
    const comando = `insert into tb_anime (nm_anime, ds_sinopse, dt_lancamento)
                                   values (?, ?, ?)`

    const [resposta] = await con.query(comando, [anime.nome, anime.sinopse, anime.lancamento])
    anime.id = resposta.insertId;

    return anime;
}


export async function alterarAnime(anime, id) {
    const comando = `update tb_anime
                    set nm_anime		= ?,
                        ds_sinopse		= ?,
                        dt_lancamento   = ?
                    where id_anime      = ?`

    const [resposta] = await con.query(comando, [anime.nome, anime.sinopse, anime.lancamento, id]);
    return resposta.affectedRows;
}


export async function consultarAnime() {
    const comando = `select id_anime			id,
                            nm_anime           	nome,
                            ds_sinopse  	    sinopse,
                            dt_lancamento 	    lancamento
                    from tb_anime;`

    const [resposta] = await con.query(comando);
    return resposta;
}

export async function deletarAnime(anime) {
    const comando = `delete from tb_anime 
                        where id_anime = ?`

    const [resposta] = await con.query(comando, [anime]);
    return resposta.affectedRows;
}