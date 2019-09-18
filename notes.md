/*


---------------------------------------------------------------------------------
Dependencias instaladas:

# Framework node
- yarn add express

# Importa configurações novas do es6
- yarn add sucrase
  - tem q ser configurado no arquivo do nodemon.json para funcionar

# Atualiza o servidor após uma atualização
- yarn add nodemon -D

# Sequelize é um ORM
- yarn add sequelize
- yarn add sequelize-cli -D // interface de linha de comando
- yarn add pg pg-hstore
## Comando sequelize
- yarn sequelize migration:create --name=create-users //comando para criar uma migration com o nome da tabela users
- yarn sequelize db:migrate // rodar as migrations
- yarn sequelize db:migrate:undo // remove a ultima migration
- yarn sequelize db:migrate:undo:all // remove todas as migrations

# Criptografar dados, usado em senha
- yarn add bcryptjs

#JWT
# Gera o token para a autentificação
- yarn add jsonwebtoken


# Ajuda a fazer as validações dos dados
- yarn add yup

# Ajuda a trabalhar com upload de imagem
- yarn add multer

# ajuda a trabalhar com datas
- yarn add date-fns@next
* @next - instala a versão mais nova

# conecta com o banco de dados mongo
- yarn add mongoose


# envio de email
- yarn add nodemailer
# configurar os templates de emails: handlebarsjs.com
- yarn add express-handlebars nodemailer-express-handlebars

#bee queue or kue
- controla os processos
- yarn add bee-queue
---------------------------------------------------------------------------------
Extensões VS CODE

- eslint :  padronização do codigo
-EditorConfig to VS CODE : exporta as configurações do editor de texto padronizando o codigo para toda  a equipe

ESLINT - padronizar o codigo
- yarn add eslint -D
- yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
  - prettier //deixa o codigo mais bonito
- yarn eslint --fix src --ext .js // comando para padronizar o codigo com a extensão js e na pasta src


---------------------------------------------------------------------------------
Docker - Ambiente de desenvolvimento

Migrations - Cria as tabelas no banco de dados
* a mingration em ambiente de produção nunca pode ser mudada

Seeds - Usada para popular o banco de dados com dados testes

# Arquiterura MVC

M -

V -

C - No maximo 5 metodos:
  - index // listagem de usuarios
  - show // exibir um único usuario
  - store // cadastrar usuário
  - update // alterar usuario
  - delete // remover usuario


######################################
#
# Explicações tecnicas
#
######################################

1143,42
#Middleware
- São funções que tem acesso ao objeto de solicitação (req), o objeto de resposta (res), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo. A próxima função middleware é comumente denotada por uma variável chamada next.

#Sequelize
- O Sequelize é um ORM (Object-Relational Mapper) para Node.js, que tem suporte aos bancos de dados PostgreSQL, MariaDB, MySQL, SQLite e MSSQL, como ORM ele faz o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos Javascript.
- Ele permite criar, buscar, alterar e remover dados do banco de dados utilizando métodos JS, além de permitir a modificação da estrutura das tabelas, com isso temos muita facilidade tanto na criação, população e migração de banco de dados.

#ORM
- ORM (Object Relational Mapper) é uma técnica de mapeamento objeto relacional que permite fazer uma relação dos objetos com os dados que os mesmos representam. Ultimamente tem sido muito utilizada e vem crescendo bastante nos últimos anos.
- Este crescimento tem se dado principalmente pelo fato de muitos desenvolvedores não se sentirem a vontade em escrever código SQL e pela produtividade que esta técnica nos proporciona. Existem ótimos ORM´s como Hibernate, NHibernate, Entity Framework e etc.

#Docker
- Esse conceito precisa ser compreendido em partes. O container é um ambiente isolado. Já o docker é uma plataforma open source na linguagem de programação Go, que possui alto desempenho e é desenvolvida diretamente no Google.
- Assim, o docker agrupa partes de softwares de um sistema de arquivo completo e que abrange todos os recursos necessários para a sua execução. Por isso, é uma plataforma de containers.

#JWT
- É uma string de caracteres codificados que, caso cliente e servidor estejam sob HTTPS, permite que somente o servidor que conhece o ‘segredo’ possa ler o conteúdo do token, e assim confirmar a autenticidade do cliente.
- Ou seja, quando um usuário se autentica no sistema (com usuário e senha), o servidor gera um token com data de expiração pra ele. Durante as requisições seguintes do cliente, o JWT é enviado no cabeçalho da requisição e, caso esteja válido, a API irá permitir acesso aos recursos solicitados, sem a necessidade de se autenticar novamente.

#Redis
- banco de dados






*/
