# Notando as diferenças

Depois de ter analisado as queries acima, note que, de fato, a única diferença entre os três joins é a questão do foco. Vamos explorar essa ideia a seguir.

LEFT JOIN: quando utilizamos o LEFT JOIN, focamos a tabela da esquerda. São retornados todos os registros da tabela da esquerda e valores correspondentes da tabela da direita, caso existam. Valores que não possuem correspondentes são exibidos como nulos.

RIGHT JOIN: quando utilizamos o RIGHT JOIN, focamos a tabela da direita. São retornados todos os registros da tabela da direita e valores correspondentes da tabela da esquerda, caso existam. Valores que não possuem correspondentes são exibidos como nulos.

INNER JOIN: finalmente, temos o INNER JOIN, que foca em trazer somente os registros que possuem valores correspondentes em ambas as tabelas.

