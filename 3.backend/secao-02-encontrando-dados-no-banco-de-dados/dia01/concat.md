# CONCAT - juntando duas ou mais colunas

Dê uma pesquisada agora na tabela sakila.actor usando o comando SELECT * FROM sakila.actor e veja que temos uma coluna chamada first_name e outra chamada last_name. Vamos imaginar que é necessário criar um relatório com o nome completo de um ator. Como podemos fazer isso? É fácil, basta usar a função CONCAT.

Para compreender seu uso, execute os exemplos a seguir no MySQL Workbench:

SELECT CONCAT(first_name, last_name) FROM sakila.actor;

-- Seu resultado ficou estranho? Eu também achei! Tente agora a query a seguir.

SELECT CONCAT(first_name, " ", last_name) FROM sakila.actor;

-- Muito melhor, certo? Mas dá para melhorar? Dá!

SELECT CONCAT(first_name, " ", last_name) AS "Nome Completo" FROM sakila.actor;

## DISTINCT - evitando dados repetidos

## COUNT - contando resultados

Um dos principais objetivos de se usar um banco de dados é responder a perguntas como: “Que quantidade de um certo tipo de dados existe na tabela?”. Ou, em um caso mais próximo ao nosso: “Quantas pessoas temos cadastradas no sistema?”. Ou ainda: “Em quantos estados temos clientes?”.

## LIMIT - especificando a quantidade de resultados

Se você abrir agora o nosso banco de dados sakila e executar a query a seguir, verá que o resultado é 16044, ou seja, existem 16044 linhas na tabela rental.

SELECT COUNT(*) FROM sakila.rental;

Isso não é sempre necessário e pode até ser um problema em bancos de dados gigantes, em que as tabelas podem conter milhares ou milhões de linhas. Resolver isso é bem simples: tudo que você precisa fazer é limitar o resultado usando o LIMIT:

# Query + LIMIT quantidade_de_resultados

SELECT * FROM sakila.rental LIMIT 10;

## LIMIT OFFSET - Pulando linhas desnecessárias

Para pular uma certa quantidade de linhas do seu resultado, você pode usar o comando OFFSET.

## Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas

SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

## ORDER BY - ordenando resultados

SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;

