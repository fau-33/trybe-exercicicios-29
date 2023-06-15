# WHERE - especificando resultados

SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

Como o operador AND tem preferência sobre o operador OR, ele é avaliado primeiro. Então os registros buscados são aqueles nos quais amount = 2.99 e staff_id = 2. Na sequência, são buscados os registros nos quais amount = 0.99, independente do valor de staff_id. Os valores retornados serão os resultados dessas duas buscas. Ou seja, a query é executada como se tivesse os seguintes parênteses: amount = 0.99 OR (amount = 2.99 AND staff_id = 2).

SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

Primeiramente, a expressão dentro dos parênteses é avaliada, e todos os resultados que satisfazem a condição amount = 0.99 OR amount = 2.99 são retornados. Na sequência, a expressão do lado direito do AND é avaliada, e todos os resultados que satisfazem a condição staff = 2 são retornados. O AND então compara o resultado de ambos os lados e faz com que somente os resultados que satisfazem ambas as condições sejam retornados.

# Operadores booleanos e relacionais

-- OPERADOR - DESCRIÇÃO
=   IGUAL
>   MAIOR QUE
<   MENOR QUE
>=  MAIOR QUE OU IGUAL
<=  MENOR QUE OU IGUAL
<>  DIFERENTE DE
AND OPERADOR LÓGICO E
OR  OPERADOR LÓGICO OU
NOT NEGAÇÃO
IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)

# LIKE - criando pesquisas mais dinâmicas

Você está tentando se lembrar do nome de um filme a que já assistiu, mas só se lembra de que ele terminava com don no nome. Como seria possível usar o LIKE para te ajudar a encontrá-lo?

SELECT * FROM sakila.film
WHERE title LIKE '%don';

SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

SELECT * FROM sakila.film
WHERE title LIKE '_C%';

# IN e BETWEEN - englobando uma faixa de resultados

## Operador IN

Como você viu no início do dia hoje, é possível juntar várias condições nas suas queries usando os operadores AND e OR. No entanto, você ainda terá que digitar cada condição separadamente, como no exemplo a seguir:

SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';

Uma forma melhor de fazer essa mesma pesquisa seria usando o IN:

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

## Operador BETWEEN

Uma outra opção quando queremos trabalhar com faixas de resultados é o BETWEEN, que torna possível fazer pesquisas dentro de uma faixa inicial e final.

expressão BETWEEN valor1 AND valor2;
-- a expressão é a sua query
-- e valor1 e valor2 delimitam o resultado

Então, quando você faz uma query como essa, você terá o resultado da imagem a seguir:


-- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

## Usando o BETWEEN com strings

Para encontrar uma faixa de valores em que os valores são strings, podemos digitar a palavra por completo para encontrar os valores. Exemplo:


SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

## Usando o BETWEEN com datas

Para usar o BETWEEN com datas, basta que você digite o valor no formato padrão da data, que é YYYY-MM-DD HH:MM:SS, sendo os valores de horas, minutos e segundos opcionais. No exemplo abaixo, estamos filtrando os resultados para exibir o rental_id e rental_date apenas entre o mês 05 e o mês 07:


SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

## Data e tempo - lidando com resultados temporais

No MySQL, o tipo DATE faz parte dos tipos de dados temporais, os quais vamos ver com mais detalhes no decorrer do curso. O MySQL, por padrão, usa o formato YYYY-MM-DD (ano/mês/dia) ao armazenar os valores de uma data. Você é obrigado, pelo banco de dados, a salvar nesse formato, e não é possível alterá-lo. Temos também o tipo DATETIME, que inclui informações de tempo. Vamos ver dois tipos comuns a seguir:

DATE - Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31
DATETIME - Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.
Se você pesquisar agora no banco sakila usando a seguinte query:

## Maneiras de encontrar dados por data
Vamos dizer que queremos encontrar pagamentos realizados na data 2005-07-31 na tabela sakila.payment. Há várias formas de fazer isso.

Usando a função DATE(coluna_do_tipo_date):

Copiar
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';