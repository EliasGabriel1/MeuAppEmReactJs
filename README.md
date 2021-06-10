O projeto recebe os seguintes requisitos:

Além de Marte, um sistema que apresenta as fotos recentes de Marte, nessas fotos precisam ter um botão de likes,
 e um contador de quantos likes determinada foto obteve, para isso você precisará conectar-se em https://api.nasa.gov/.
Para o usuário acessar essa tela de fotos antes ele precisa ter deixado seu nome em uma tela (como se fosse um login), 
este nome precisa estar visível na tela, sendo possível editar o nome.

Backend - Cada like precisa ser salvo em banco de dados (para isso utilize o SQLite, ou qualquer banco de dados embutido).
Crie métodos de Salvar, Ler e deletar esses Likes.
 Cada Nome precisa ser salvo em um banco de dados.
Crie métodos de Salvar, Ler e deletar esses Likes.

Frontend - Crie um layout inspirado no Wireframe com ReactJS, apresentando as imagens, botão de likes, contador de likes, 
descrição da foto se houver.


A maior dificuldade que seria encontrada fora o back end(api) que eu mesmo me desafiei a seguir a mesma linguagem do front,
sendo assim fora feito em node.js. No front a unica dificuldade fora fazer o contexto na hora que a pessoa apresenta seu nome
pra entrar no projeto e trazer o nome dela para o inicio

Api fora feito:
Usando Node v16.2.0
Usando o 
	Express, web framework para node 
	body-parser, pacote responsável por fazer a serialização dos dados
	cors, ele administra o domonio de origem
	nodemon, é um pacote que ajuda com high reload
	morgan, um pacote de log do lado do servidor, na parte de requisições


$ npm install express body-parser morgan cors nodemon'

no react fora usado
	axios
	react-router-dom
	E alguns componentes e auxilios fo proprio react

Explicando sobre a estrutura:

Quando fora planejado a estrutura, fora levado em consideração a separação das duas ideias, o front e o back, o back end
tratando alguns dados e se comunicando com o banco embarcado, sqlite, o front fazendo a alimentação da api e 
enviando os dados pro back-end.
Falando mais sobre cada estrutura, pensei um pouco em como o usuario iria se sentir usando o software,
pensando assim, o primeiro carregamento fora feito direto da api da NASA, o tempo de execuração seria muito maior tratando a api,
pra API feita por mim no node consumir da api da nasa e enfim enviar o primeiro dado,
 e tratando de bancos embarcados como o sqlite tem um certo delay entre o insert e a visualização do get desse mesmo daod.
 Sendo assim, o tempo da pessoa curtir a foto seria muito menor.

Próximos passos:

Como fora ignorante, passando a entender mais sobre api em node com sitemas embarcados, não pensei em fazer uma tabela apenas
para as fotos que a pessoa curtiu, separando esse dados das fotos que possui x curtidas, sendo assim, tendo a relação de que 
{pessoa x curtiu foto y}(relação um pra um) e {foto y possui tantas curtidas}(relação um pra todos).
Fora feito duas telas no figma, para próximos passos, como a melhora do wireframe e trazer um UI e UX para mais perto do projeto, 
levando em consideração adicionar o framework Material UI.
Para a api e o react, por mais que a usuabilidade existe no projeto, toda a estrutura fora pensado em projeto pequeno, então
para torná-la alcançaveis e poder crescer cada vez mais, organizar e em vez de fazer os routes no file app.js fazer um roate.js
 só para esse propósito.
Como por ultima observação gerar um login, não sendo mais só uma apresentação de quem se "inscreveu".
O último pensado, seria um segundo carregamento, pra pessoa ver todas as últimas fotos vistas,
por isso mesmo a estrutura fora feito como se as fotos e dados guardados só seria gravados as que a pessoa viu.



#Mostrando mais sobre o projeto:

Primeira tela

![App index](https://user-images.githubusercontent.com/50595684/121610856-54cd1e80-ca2d-11eb-8f4b-3c87f8f626a4.PNG)

Fazendo login, enviando dado pra api e atravez do context levando para a tela home:

![usando meu nome e pondo no banco](https://user-images.githubusercontent.com/50595684/121610896-69111b80-ca2d-11eb-9c43-e6dce3df5ce3.PNG)


![home](https://user-images.githubusercontent.com/50595684/121610901-6ca4a280-ca2d-11eb-8fc7-becaf1070959.PNG)


![primeira tela_2](https://user-images.githubusercontent.com/50595684/121610904-70382980-ca2d-11eb-9620-9d8dcba1f9e5.PNG)


##E levando mais a fundo nos codes, quando dou like ele atualiza os dados da foto, da coluna "likes"

![quando dou like](https://user-images.githubusercontent.com/50595684/121610932-83e39000-ca2d-11eb-89ce-381be9b3fe24.PNG)

![ele da um put](https://user-images.githubusercontent.com/50595684/121610940-87771700-ca2d-11eb-9a59-959be01f1036.PNG)




