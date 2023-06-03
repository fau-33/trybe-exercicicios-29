# DOCKER: UTILIZANDO CONTAINERS

## Comandos básicos do docker

- docker <comando> <subcomando> <parâmetros> é o formato padrão para comandos não-abreviados no CLI;

- Utilize o parâmetro --help no <comando> ou <subcomando> para ter a relação completa do que pode ser executado a partir deles;

- Exemplo: docker container --help ou docker container run --help.
Os <parâmetros> são opcionais na execução dos comandos;

O conteúdo faz referência à documentação oficial do Docker.

Nos exemplos desta seção, nós usaremos imagens Docker que já foram construídas e publicadas no Docker Hub de maneira pública. Em um próximo momento, vamos aprender como criar nossas próprias imagens Docker e executá-las como containers!

## Listando Imagens no docker

Primeiro, vamos aprender a visualizar as imagens Docker em nosso computador! Veremos o nome, sua data de criação e seu tamanho em disco.

➡️ Utilize o comando docker images para visualizar todas as imagens Docker que já estão presentes em sua máquina.

Ao tentar executar um container com uma imagem específica e esta imagem não estiver presente em nossa máquina, o Docker por padrão tentará obter a imagem Docker através do seu Registry, o Docker Hub. Veja um exemplo de saída do comando em uma máquina sem nenhuma imagem:

pessoa@trybe:~/course$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Agora, veja um exemplo de saída do comando com uma máquina com várias imagens Docker:

pessoa@trybe:~/course$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
python       3.10      de1ec279ff75   14 hours ago   919MB
alpine       3.14      e04c818066af   2 weeks ago    5.59MB

## Listando Containers

➡️ Utilize o comando docker ps ou o comando mais novo, o docker container ls, para listar todos os containers em execução neste momento em sua máquina.

Veja o exemplo abaixo em uma máquina que não há nenhum container em execução no momento:

pessoa@trybe:~/course$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
pessoa@trybe:~/course$ docker container ls
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

Agora, veja o exemplo de saída abaixo quando temos alguns containers em execução no momento:

pessoa@trybe:~/course$ docker container ls
CONTAINER ID   IMAGE         COMMAND        CREATED          STATUS          PORTS     NAMES
1cc75e507cd0   alpine:3.14   "sleep 5000"   7 seconds ago    Up 6 seconds              angry_mirzakhani
9a38f7a32b42   python:3.10   "sleep 5000"   15 seconds ago   Up 15 seconds             hungry_yonath

Entretanto, por padrão, o comando docker ps não exibe containers que foram parados ou que terminaram sua execução. Para visualizar todos os containers atuais, incluindo os que estão em execução e também parados, é necessário utilizar a flag -a. Veja o exemplo de saída do comando abaixo:

pessoa@trybe:~/course$ docker container ls -a
CONTAINER ID   IMAGE         COMMAND        CREATED          STATUS          PORTS                  NAMES
1cc75e507cd0   alpine:3.14   "sleep 5000"   7 seconds ago    Up 6 seconds                           angry_mirzakhani
9a38f7a32b42   python:3.10   "sleep 5000"   15 seconds ago   Up 15 seconds                          hungry_yonath
14a00a2e09c9   alpine:3.14   "/bin/sh"      12 minutes ago   Exited (0) 12 minutes ago              meu-container

## EXECUTANDO UM NOVO CONTAINER

➡️ Utilize o comando docker container run <flags>? <imagem>:<tag> <argumentos>? para executar um container utilizando a imagem identificada pelo <imagem>:<tag>.

O exemplo abaixo executa um container usando a imagem Docker alpine e a tag 3.14:

pessoa@trybe:~/course$ docker container run alpine:3.14 echo "Hello World"
Unable to find image 'alpine:3.14' locally
3.14: Pulling from library/alpine
8663204ce13b: Pull complete
Digest: sha256:06b5d462c92fc39303e6363c65e074559f8d6b1363250027ed5053557e3398c5
Status: Downloaded newer image for alpine:3.14
Hello World!
pessoa@trybe:~/course$ docker ps -a
CONTAINER ID   IMAGE         COMMAND                 CREATED          STATUS                      PORTS     NAMES
52712fa829f0   alpine:3.14   "echo 'Hello World'"   19 seconds ago   Exited (0) 19 seconds ago             xenodochial_kapitsa

⚠️ Os parâmetros <flags>? e <argumentos>? são opcionais (o que é sinalizado pelo uso de ?), porém vamos aprender seu uso mais adiante.

## Recapitulando 🧠

Vamos entender passo-a-passo tudo o que aconteceu durante a execução do comando anterior:

Pedimos para o Docker criar um novo container, baseado na imagem chamada alpine, usando a tag 3.14 e passando os argumentos echo e "Hello World";
O Docker verifica se já temos esta imagem, com esta tag, no disco da máquina;
Se a imagem não é encontrada, o Docker imprime na tela a mensagem Unable to find image 'alpine:3.14' locally e começa a baixar a imagem do Docker Hub;
Com a imagem e a tag presentes no disco da máquina, o Docker cria um processo isolado e utiliza a imagem Docker como o “disco” base para este processo;
Como estamos subindo este container passando os argumentos echo e "Hello World", o comportamento padrão da imagem alpine é executar este comando. Por isso, nós vemos a saída Hello World no terminal!
Ao executar o comando docker ps -a, verificamos que o container foi criado, porém ele já terminou sua execução e ficou com o status Exited.

## Modo “auto-remover”

Este modo é útil para testar várias imagens Docker sem ficar com uma lista de containers parados. A flag --rm indica para o Docker que desejamos que um container seja removido ao final da sua execução. Veja abaixo um exemplo do uso da flag:

pessoa@trybe:~/course$ docker container run --rm alpine:3.14 echo "Hello World 3"
Hello World 3!
pessoa@trybe:~/course$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

## Modo “segundo plano”

A flag -d ou --detach faz com que a execução do container ocorra em segundo plano, ou seja, embora não esteja visível, o container executará de forma assíncrona. Esta opção é interessante quando o programa a ser executado é um servidor ou algum processo que você sabe previamente que terá uma execução demorada.

Veja abaixo a saída ao executar um container no modo detached. Neste exemplo, trocamos o argumento echo pela execução do programa sleep, que fará com que o container continue sua execução por 300 segundos (5 minutos):

pessoa@trybe:~/course$ docker container run --rm -d alpine:3.14 sleep 300
81e61d38ca40cb4707f44d9aba8c803c23ab4a45c23a83c55278eace2b345c3e
pessoa@trybe:~/course$ docker ps -a
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS          PORTS     NAMES
81e61d38ca40   alpine:3.14   "sleep 300"   12 seconds ago   Up 12 seconds             amazing_thompson