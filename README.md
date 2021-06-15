## Share eat
Visando melhorar a experiencia do usuario, o Share eat permite ao usuario cadastrar novos pratos em seu local.
No Share eat, voce pode ver os principais locais listados, pode ver a lista de pratos a venda de um local em especifico.
Voce tambem pode cadastrar novos pratos.

Veja a demo: [`Share-eat`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

### Design

Adobe XD
<img align="left" alt="Visual Studio Code" width="46px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png" />
<br/>
[`Mockup Mobile`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
[`Mockup Desktop`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Rodando o Projeto

Primeiramente clone o repositorio utilizando o seguinte comando:
```
git clone https://github.com/thejakdev/share-eat.git
```
<br/>
Em seguida entre na pasta /share-eat

```
cd share-eat
```
<br/>
Digite o comando

```
npm run build
```
<br/>
E por fim digite o comando npm run dev para rodar o projeto em modo de desenvolvimento.

```
npm run dev
```
<sub>Imporante! O NextJS utiliza da porta 3000 para rodar o projeto. antes de rodar o npm run dev, certifique-se que a porta 3000 esta livre.</sub>

<br/>
<br/>

## Tecnologias usadas

[`NextJS`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)<br/>
[`Styled Components`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)<br/>
[`Material UI`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)<br/>
[`React Hook Form`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)<br/>
[`Axios`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

# Visao geral da estrutura do projeto
### Styled Components
A pasta [📦styled] contem todos os arquivos de estilos globais.

📦styled<br/>
 ┣ 📂1-base<br/>
 ┃ ┣ 📜colors.js<br/>
 ┃ ┣ 📜font-weight.js<br/>
 ┃ ┣ 📜font.js<br/>
 ┃ ┣ 📜global.js<br/>
 ┃ ┣ 📜index.js<br/>
 ┃ ┗ 📜mixins.js<br/>
 ┣ 📂2-layout<br/>
 ┣ 📂3-module<br/>
 ┃ ┗ 📜place.js<br/>
 ┣ 📂4-state<br/>
 ┗ 📂5-theme<br/>
 
 <br/>
 
 ### Servicos
 A pasta [📦services] contem todos os arquivos de chamadas a servicos de API.

📦services<br/>
 ┣ 📜Places.js<br/>
 ┗ 📜Service.js<br/>
 
 <br/>
 
 ### Paginas
 A pasta [📦pages] e uma pasta padrao do NextJS, onde contem todos arquivos de rotas para as paginas da aplicacao.
 Dentro da pasta `pages` encontra-se tambem a pasta `api` onde contem arquivos de API Routers.
 
📦pages<br/>
 ┣ 📂api<br/>
 ┃ ┗ 📂places<br/>
 ┃ ┃ ┣ 📜index.js<br/>
 ┃ ┃ ┗ 📜[placeId].js<br/>
 ┣ 📂place<br/>
 ┃ ┗ 📜[place].js<br/>
 ┣ 📜index.js<br/>
 ┣ 📜_app.js<br/>
 ┗ 📜_document.js<br/>
 
  <br/>
  
 ### Dados
 A pasta [📦data] contem os arquivos json que sao usados para simular uma requisicao a uma API router.
 
 📦data<br/>
 ┗ 📜db.json<br/>
  
  <br/>
  
 ### Configuracoes
 A pasta [📦configs] contem os arquivos json com algumas configuracoes padroes para a aplicacao.
 
 📦configs<br/>
 ┗ 📜config.json<br/>
   
  <br/>
  
 ### Components
 A pasta [📦components] contem os components usados na aplicacao a aplicacao.
 
 📦components<br/>
 ┣ 📂data-display<br/>
 ┃ ┣ 📂Heading<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┃ ┗ 📂Typography<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┣ 📂feedback<br/>
 ┃ ┗ 📂Dialog<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┣ 📂form<br/>
 ┃ ┣ 📂button<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┃ ┣ 📂TextArea<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┃ ┗ 📂TextField<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┣ 📂layout<br/>
 ┃ ┣ 📂Container<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┃ ┗ 📂Logo<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┣ 📂patterns<br/>
 ┃ ┗ 📂Header<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┗ 📂ui<br/>
 ┃ ┣ 📂Card<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
 ┃ ┗ 📂CardList<br/>
 ┃ ┃ ┣ 📜index.jsx<br/>
 ┃ ┃ ┗ 📜styles.js<br/>
