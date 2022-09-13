create database projeto_anime;

use projeto_anime;

create table tb_usuario (
	id_usuario		int primary key auto_increment,
	nm_usuario		varchar(200),
	ds_email		varchar(200),
	ds_senha		varchar(20)
);

create table tb_anime (
	id_anime		int primary key auto_increment,
	nm_anime		varchar(200),
    ds_sinopse		varchar(200),
    dt_lancamento	date
);