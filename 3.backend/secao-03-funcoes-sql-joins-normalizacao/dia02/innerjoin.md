# Como utilizar o INNER JOIN

Como foi visto no vídeo, o INNER JOIN permite retornar todos os resultados em que a condição da cláusula ON for satisfeita. A sintaxe de um INNER JOIN é a seguinte:

SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

## Por que usamos o alias (AS)?

O alias AS é usado para apelidar qualquer parte da sua query. Isso ajuda o sistema de banco de dados a identificar a qual coluna estamos nos referindo, evitando erros de ambiguidade de nome de colunas, além de tornar suas queries mais concisas e legíveis.

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

## Dicas sobre como escolher o tamanho do alias

Sua query é composta de poucas linhas? Então use apenas letras ou a primeira sílaba para representar a coluna. Por exemplo, “actor” se tornaria “A” ou “act”.

Caso esteja montando JOINS com muitas linhas, é recomendado usar um alias mais descritivo para tornar a leitura e interpretação da query mais simples.