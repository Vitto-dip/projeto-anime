use tb_anime;

--Carga inicial do usuario
insert into tb_usuario (nm_usuario, ds_email, ds_senha)
     values ('admin', 'simoesvictor188@gmail.com', '250406');


--(1)Efetuar Login
select id_usuario		id,
		nm_usuario		nome,
        ds_email		email
from tb_usuario
where ds_email          = 'simoesvictor188@gmail.com'
and ds_senha            = '250406';





--(2)Inserir Animes
insert into tb_anime (nm_anime, ds_sinopse, dt_lancamento)
			  values ("Naruto Shippuden", "Garoto das Nove Caldas", "1998-10-22");

--(3)Alterar Animes
update tb_anime
set nm_anime		= "One Piece",
	ds_sinopse		= "Garoto que estica",
    dt_lancamento   = "1990-07-15"
where id_anime = 1;


--(4)Consultar Animes
select id_anime			id,
		nm_anime    	nome,
        ds_sinopse  	sinopse,
        dt_lancamento 	lancamento
from tb_anime;

--(5)Deletar Animes
delete from tb_anime 
      where id_anime = 1;

