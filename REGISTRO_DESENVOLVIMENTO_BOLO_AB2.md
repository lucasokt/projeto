# Registro de desenvolvimento — Projeto Bolo (AB2)

**Disciplina:** Programação Web I  
**Professor:** Gustavo Miranda  
**Projeto:** Bolo — Festivais de Fatias  
**Documento de trabalho:** atualizar ao final de cada alteração efetivamente realizada e testada.

> **Atenção:** este documento distingue o que foi confirmado no projeto da AB1, decisões para a AB2 e funcionalidades ainda pendentes. Não registrar como implementado algo que apenas foi planejado.

## 1. Objetivo da aplicação

O Bolo é um sistema web proposto para divulgar bolos produzidos por confeiteiros/produtores, facilitar a descoberta de receitas e apoiar a divulgação relacionada a festivais de fatias. A AB2 pretende tornar funcional o protótipo apresentado na AB1, mantendo sua identidade visual.

## 2. Estado inicial — AB1 (confirmado pelos códigos enviados)

- Aplicação em **React 19.3.0**, **React DOM 19.3.0** e **Create React App / react-scripts 5.0.1**.
- Comando para iniciar: `npm start` na pasta `bolo`.
- Arquivos analisados: `src/App.js`, `src/App.css`, `src/index.js`, `public/index.html`, `package.json`.
- Componentes existentes em pasta separada: `components/header.js` e `components/footer.js`. No `App.js` enviado, cabeçalho e rodapé ainda estavam escritos diretamente no componente App, sem importar esses arquivos.
- Página inicial com cabeçalho, hero (“Cada fatia tem uma história”), seção “Como funciona”, seção “Mãos ao forno”, chamada final e rodapé.
- CSS com Flexbox, estilização de textos, imagens e botões.
- Bolos e contadores apresentados inicialmente são valores fixos no JSX; não foram comprovados como dados reais.
- `public/index.html` com `lang="en"` e título “Documento”; ajustes sugeridos para `pt-BR` e título do Bolo.
- Não identificados no `App.js` e `package.json` recebidos: React Router, React Icons, props nos cards, `onClick`, `onChange`, `useState`, renderização condicional ou integração com banco de dados. Ausência nesses arquivos não prova a ausência em arquivos ainda não vistos.

## 3. Decisões aprovadas para a AB2 (ainda não implementadas)

Manter quatro páginas, preservando estética da AB1 (fundo creme `#f7f0e5`, marrom `#4a2921`, rosa `#df4054`, fontes Georgia e Arial):

1. **Início** (`/`): reaproveitar a página da AB1.
2. **Como funciona** (`/como-funciona`): detalhar as três etapas; festival como explicação, sem criar inscrição completa em festival.
3. **Encontrar um bolo** (`/bolos`): vitrine de bolos, pesquisa por nome/produtor e filtros simples (Todos, Chocolate, Tradicionais, Especiais).
4. **Quero vender** (`/anunciar`): cadastro de bolo; campos propostos — nome do bolo, produtor, cidade, categoria, descrição e preço.

Navegação proposta: “Encontrar um bolo” → `/bolos`; “Como funciona” → `/como-funciona`; “Quero vender”, “Participar” e “Anuncie seu bolo” → `/anunciar`; “Escolha o festival” e “Sirva sua fatia” → `/como-funciona`.

**Critério de simplicidade:** não implementar pagamentos, carrinho, login ou gestão complexa de festivais, pois não aparecem como exigências explícitas no enunciado compartilhado.

## 4. Banco de dados — estado atual

- MySQL Community Server **8.4.13** instalado e configurado no Windows.
- Configuração concluída com sucesso e acesso ao MySQL Command Line Client verificado (`mysql>`).
- O serviço configurado é `MySQL84`, com porta padrão `3306`.
- O banco `bolo` e a tabela `bolo.bolos` foram criados no MySQL local. A conta `bolo_app` foi configurada com permissões `SELECT` e `INSERT`.
- A equipe confirmou manualmente o fluxo React ↔ API Express ↔ MySQL. Um anúncio cadastrado pelo formulário apareceu na vitrine e continuou disponível após atualizar a página.
- **Segurança:** não colocar a senha do MySQL em arquivos do React nem em mensagens, documentação ou GitHub. Usar `.env` apenas no backend e manter esse arquivo fora do versionamento.

## 5. Requisitos técnicos da Tabela 1 — AB2

| Requisito | Situação antes das alterações da AB2 |
|---|---|
| Página HTML inicial e React | Confirmado |
| Divisão da página em partes | Confirmado em seções JSX; avaliar uso efetivo de componentes após refatoração |
| Comandos de locomoção/posicionamento de componentes | Flexbox confirmado |
| Estilização de texto | Confirmado |
| Estilização de imagem | Confirmado |
| Rotas para páginas diferentes | Pendente |
| Props | Pendente |
| React Icons | Pendente |
| Eventos `onChange` e `onClick` | Pendente |
| `useState` e renderização condicional | Pendente |
| Conexão com banco de dados | Pendente |

## 6. Outras entregas previstas pelo enunciado

- Documento resumido com definição do problema e respostas Q1, Q2 e Q3.
- Protótipo das telas com justificativa de como cada uma ajuda a enfrentar o problema.
- Divisão de responsabilidades da equipe; organização no Trello (recomendada no documento) e controle de versões no GitHub.
- Repositório com README descrevendo o software e como executá-lo.
- Apresentação do desenvolvimento, sistema online e projeto no GitHub.

## 7. Histórico cronológico de alterações

### 22/11/2026 — Planejamento e diagnóstico (sem alterações verificadas no código da AB2)

**Atividade:** revisão dos arquivos da AB1 e discussão das quatro páginas e da busca com filtros.  
**Decisões:** preservar o visual; implementar progressivamente as rotas, componentes/props, ícones, interatividade e depois banco de dados.  
**Resultado comprovado:** instalação do MySQL Server concluída e acesso ao cliente de linha de comando confirmado.  
**Pendências imediatas:** cópia de segurança da AB1; implementar e testar o front-end no projeto React; registrar arquivos efetivamente alterados.

### 23/11/2026 — Quatro páginas e navegação com React Router

- Foram criadas as páginas Início (`/`), Como funciona (`/como-funciona`), Encontrar um bolo (`/bolos`) e Quero vender (`/anunciar`). A página inicial reaproveita os textos, os contadores, as seções e as quatro imagens da AB1.
- `src/App.js` declara as rotas com React Router. `src/pages/` contém os quatro componentes de página. O cabeçalho e o rodapé foram adaptados e movidos de `components/` para `src/components/`. `src/App.css` preserva os estilos da AB1 e inclui as regras das telas novas. `package.json` e `package-lock.json` registram a dependência `react-router-dom`.
- Os links de navegação levam à vitrine, à explicação dos festivais e ao formulário. A marca Bolo retorna ao início.
- A etapa atende aos requisitos de React, estrutura HTML, componentes, Flexbox, estilização de textos e imagens e rotas. A vitrine apresenta exemplos estáticos, e o formulário já apresenta os seis campos previstos.
- `npm run build` compilou com sucesso. Um teste automatizado com JSDOM verificou o acesso direto às quatro rotas, a estrutura das páginas, os oito links da tela inicial, a navegação pelo histórico, o link para o formulário na página Como funciona e o retorno pela marca. Também comparou textos, seções, imagens e propriedades de estilo da tela inicial com a AB1.
- A busca, os filtros e o envio do formulário estão desativados nesta etapa. Props, React Icons, `onChange`, `onClick`, `useState`, renderização condicional e integração com o MySQL ficam para as etapas seguintes.
- Para demonstrar, execute `npm start`, abra a página inicial, siga os links para as outras três páginas e use o botão Voltar do navegador ou o link da marca para retornar.

### 23/11/2026 — Menu no cabeçalho compartilhado

- `src/components/Header.js` passou a exibir Início, Como funciona, Bolos e Quero vender, com ícones de casa, informação, bolo e sacola da coleção Font Awesome 6. O menu aparece nas quatro páginas, indica a rota atual e mantém o logotipo Bolo à esquerda com link para a página inicial.
- `src/App.css` recebeu os estilos do menu e do botão rosa Quero vender. Em telas menores, o menu passa para baixo da marca. Nas mais estreitas, os links ficam em duas colunas com os rótulos em uma linha. A estrutura e o conteúdo das páginas foram preservados.
- `package.json` e `package-lock.json` registram a inclusão de `react-icons`, atendendo ao requisito de React Icons da AB2.
- `npm run build` compilou com sucesso. No Microsoft Edge em modo headless, o teste automatizado verificou o cabeçalho nas quatro páginas em nove larguras entre 320 e 1280 px, com os ícones visíveis, o item ativo indicado e sem transbordamento horizontal do menu. Também foram verificados os 16 destinos dos links a partir das quatro páginas e o retorno ao início pelo logotipo com a tecla Enter.

### 23/11/2026 — Busca e filtros da vitrine de bolos

- `src/components/CardBolo.js` foi criado para renderizar os cards com as props `nome`, `produtor`, `imagem` e `categoria`, mantendo a marcação e as classes visuais da vitrine.
- Os dados de exemplo foram movidos para `src/dados/bolos.js`. Nomes, produtores, imagens e textos alternativos foram preservados. O bolo de cenoura com brigadeiro ficou em Tradicionais, o fudge de chocolate belga em Chocolate e o red velvet com laranja em Especiais.
- `src/pages/Bolos.js` usa `useState` e `onChange` para controlar a busca e a categoria. A busca compara o nome e o produtor sem distinguir maiúsculas ou acentos e funciona em conjunto com o filtro de categoria. O botão Limpar filtros usa `onClick` para apagar a busca e voltar a Todos. A renderização condicional exibe “Nenhum bolo encontrado” quando a lista filtrada está vazia.
- `src/App.css` recebeu apenas o estilo do botão Limpar filtros. A etapa usou dados locais e preservou o cabeçalho e as outras páginas. A integração com MySQL segue prevista para outra etapa.
- `npm run build` compilou com sucesso. O teste automatizado com JSDOM verificou os dados e as imagens dos cards, a busca por nome e produtor, as quatro opções de categoria, a combinação dos filtros com e sem resultados, a mensagem de lista vazia e a limpeza dos dois campos.

### 23/11/2026 — Cadastro de bolos e API para MySQL

- `server/index.js` implementa `GET /api/bolos` e `POST /api/bolos` com Express. A API valida os seis campos e o preço e usa as consultas parametrizadas do driver configurado em `server/db.js`. Falhas de conexão retornam uma mensagem simples para o React.
- `server/schema.sql` prepara o banco e a tabela somente se estiverem ausentes. `server/.env.example` documenta as variáveis de conexão e `.gitignore` protege o arquivo local `server/.env`. O `README.md` descreve o uso da conta da aplicação com acesso limitado a `SELECT` e `INSERT`.
- `src/pages/Anunciar.js` agora valida e envia o formulário e informa o resultado ao usuário. `src/pages/Bolos.js` carrega os anúncios da API e aplica a busca e o filtro existentes aos anúncios e aos exemplos da AB1, exibidos em seções identificadas. `src/components/CardBolo.js` e `src/App.css` reaproveitam a apresentação dos cards e exibem “Sem foto”, cidade, preço e descrição nos novos anúncios.
- `package.json` e `package-lock.json` receberam as dependências e o comando `npm run server`. O proxy padrão do Create React App falhou ao validar a configuração com o servidor de desenvolvimento limitado a localhost. O encaminhamento foi configurado em `src/setupProxy.js`, com o endereço local definido em `.env.development`.
- **Teste automatizado com banco simulado.** O teste usou JSDOM, a API Express e armazenamento em memória. Verificou o proxy do React, a validação de entradas e preços, o envio dos parâmetros SQL, os filtros combinados, a separação dos exemplos, a reaparição do anúncio após recarregar a vitrine e as mensagens de erro na consulta e no cadastro.
- **Compilação.** `npm run build` compilou com sucesso.

### 23/11/2026 — Registro do teste manual no MySQL real

- A equipe criou o banco `bolo` e a tabela `bolo.bolos` e configurou o usuário `bolo_app` com permissões `SELECT` e `INSERT`.
- A equipe iniciou o React com `npm start` e a API Express com `npm run server`. Pelo formulário **Quero vender**, cadastrou um bolo de teste e recebeu a mensagem de sucesso.
- O bolo apareceu em **Anúncios cadastrados** na página **Bolos** e continuou disponível após atualizar o navegador. Esse teste manual confirmou a gravação e a consulta no MySQL local.

### 23/11/2026 — Preparação local da publicação na Vercel

- `server/app.js` concentra o mesmo app Express e as rotas `GET /api/bolos` e `POST /api/bolos`. `server/index.js` continua iniciando a API local na porta 3001 com `npm run server`. A função `api/bolos.js` reutiliza esse app na Vercel.
- `vercel.json` configura o build do Create React App e direciona os acessos diretos a `/como-funciona`, `/bolos` e `/anunciar` para o React. As chamadas a `/api/bolos` seguem para a API. O código do frontend e o proxy usado por `npm start` foram preservados.
- `server/db.js` permite conexão TLS com verificação do certificado e da identidade do servidor MySQL. `server/.env.example` documenta `DB_SSL` e `DB_SSL_CA`. A configuração local mantém o padrão anterior.
- **Testes locais.** `npm run build` passou com `CI=true`. Com banco simulado e portas isoladas, foram verificados o proxy do React, cadastro, consulta, validação de dados, mensagens de erro, filtros e reaparição do anúncio ao recarregar. Uma simulação local do roteamento da Vercel confirmou o acesso direto às quatro páginas, a entrega do build e o funcionamento de `GET` e `POST` no mesmo endereço. Um teste de configuração também confirmou as opções de TLS. O MySQL real foi validado no teste manual registrado acima.
- **Próxima etapa.** Após autorização, provisionar um MySQL online, aplicar o esquema, configurar as variáveis e os segredos do backend no ambiente Preview e validar o fluxo na Vercel. O deploy de produção no endereço atual depende do resultado do Preview e de autorização.

### 24/11/2026 — Revisão da entrega e preparação do Preview

- O `README.md` passou a descrever o objetivo, as telas, as tecnologias, a execução local e as variáveis do Preview. O `.gitignore` passou a cobrir variantes privadas de `.env`, arquivos de chaves, backups, dumps e a pasta local da Vercel. A verificação de exclusão confirmou `server/.env`, `node_modules/` e `build/`.
- As rotas do React e a API Express foram revisadas. As variáveis `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` e `DB_PASSWORD` chegam ao pool MySQL. `DB_SSL` e `DB_SSL_CA` foram exercitadas com valores fictícios para verificar o TLS, a validação do certificado e a checagem da identidade do servidor.
- `npm run build` passou com `CI=true`. Em um teste local com banco simulado, as quatro páginas abriram diretamente. A API cadastrou e consultou um bolo, rejeitou preço zero, respondeu à falha de conexão simulada e manteve o anúncio na vitrine após recarregar, junto aos exemplos da AB1.
- A branch local `ab2-preview` foi preparada para o Preview, preservando a `main`. A equipe informou que `main.bolos` já está criada no Enzonic. Ainda falta configurar o ambiente Preview na Vercel e verificar o fluxo completo com o banco online.

## 8. Regras para o trabalho com Codex

1. Trabalhar na pasta `bolo`, sem substituir a versão da AB1, e manter backup.
2. Fazer mudanças pequenas e verificáveis.
3. Preservar a identidade visual original.
4. Não adicionar recursos fora do escopo sem autorização.
5. Atualizar este registro apenas com mudanças realmente realizadas e testadas.
6. Explicar os arquivos modificados, as escolhas e como testar em português brasileiro.
7. Não salvar senhas ou outros segredos na documentação ou no repositório.
