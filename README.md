# Bolo — Festivais de Fatias

O Bolo é um projeto individual de **Programação Web I**, da **Universidade Federal de Alagoas (UFAL)**, desenvolvido para a AB2 da disciplina ministrada pelo professor **Gustavo Miranda**. O sistema apresenta a proposta dos festivais de fatias e reúne anúncios de bolos caseiros em uma vitrine.

- [Site publicado na Vercel](https://projeto-dusky-five.vercel.app)
- [Repositório no GitHub](https://github.com/lucasokt/projeto)

## Problema, objetivo e público-alvo

Quando a divulgação de bolos caseiros fica dispersa, pequenos produtores têm dificuldade para alcançar novos clientes, e os consumidores precisam consultar várias fontes para encontrar um bolo e conhecer quem o produz. O Bolo reúne essas informações em uma vitrine, com busca e filtros para facilitar a descoberta dos anúncios.

O público-alvo inclui confeiteiros independentes, padarias e outros pequenos produtores que desejam anunciar seus bolos, além de consumidores interessados em produtos caseiros e em iniciativas da comunidade.

## Páginas e funcionalidades

| Página | Rota | O que oferece |
|---|---|---|
| Início | `/` | Apresenta o projeto, os destaques da AB1 e os atalhos para a vitrine, o cadastro e a explicação da proposta. |
| Como funciona | `/como-funciona` | Explica as etapas da proposta dos festivais de fatias e oferece acesso ao cadastro de bolos. |
| Bolos | `/bolos` | Exibe os anúncios cadastrados e os exemplos da AB1 em seções separadas. A busca por nome do bolo ou do produtor pode ser combinada com o filtro de categoria. |
| Quero vender | `/anunciar` | Permite cadastrar um anúncio com nome do bolo, produtor, cidade, categoria, descrição e preço. |

Na vitrine, o componente `CardBolo` recebe os dados por props e exibe a foto quando disponível. Os anúncios cadastrados também mostram cidade, descrição e preço em reais. As categorias disponíveis são **Chocolate**, **Tradicionais** e **Especiais**. A página informa o carregamento dos anúncios, falhas na consulta e buscas sem resultados.

O formulário usa campos controlados com `useState` e `onChange`. Ele valida o preenchimento dos campos e o preço antes do envio, bloqueia um novo envio enquanto a solicitação está em andamento e exibe uma mensagem de sucesso ou erro.

## Como o sistema funciona

O React Router associa os endereços às páginas e o cabeçalho reúne os links de navegação com React Icons. O formulário envia os dados para `POST /api/bolos`. O Express valida os campos e grava o anúncio no MySQL por meio do driver `mysql2`. Ao abrir ou recarregar a vitrine, o React usa `GET /api/bolos` para consultar os anúncios persistidos no banco. A busca e o filtro são aplicados no navegador.

| Camada | Tecnologias |
|---|---|
| Front-end | React, React DOM, React Router, React Icons, JavaScript com JSX, HTML, CSS com Flexbox e Create React App. |
| Back-end | Node.js e Express. |
| Banco de dados | MySQL, com o driver `mysql2`. |
| Hospedagem | Vercel, com o build do React e uma função que reutiliza a API Express. |

## Estrutura do projeto

| Caminho | Responsabilidade |
|---|---|
| `src/index.js` e `src/App.js` | Inicialização do React, rotas e composição das páginas. |
| `src/pages/` | Páginas Início, Como funciona, Bolos e Anunciar. |
| `src/components/` | Componentes reutilizáveis `Header`, `Footer` e `CardBolo`. |
| `src/dados/bolos.js` | Dados dos exemplos da AB1 exibidos na vitrine. |
| `src/App.css` e `public/` | Estilos, HTML inicial e imagens do site. |
| `src/setupProxy.js` | Encaminhamento de `/api` ao Express em desenvolvimento. |
| `server/app.js` e `server/index.js` | Rotas da API, validação e inicialização do servidor local. |
| `server/db.js` e `server/schema.sql` | Conexão MySQL e criação do banco e da tabela locais. |
| `server/.env.example` | Modelo das variáveis de conexão com o MySQL. |
| `api/bolos.js` e `vercel.json` | Entrada da API na Vercel, configuração do build e redirecionamento das rotas do React para o HTML da aplicação. |
| `package.json` e `package-lock.json` | Scripts, dependências e registro das versões instaláveis. |

## Como executar localmente

**1. Instalar as dependências**

Use **Node.js 20.6 ou superior**, npm e **MySQL 8.4**. Em uma cópia do repositório, execute na raiz:

```bash
npm ci
```

**2. Configurar o MySQL**

Em uma sessão administrativa do cliente MySQL iniciada a partir da raiz do projeto, execute:

```sql
SOURCE server/schema.sql
```

O script prepara o banco local `bolo` e a tabela `bolos`. Use uma conta da aplicação com permissões de consulta e inserção (`SELECT` e `INSERT`) nessa tabela.

Crie `server/.env` a partir de `server/.env.example` e preencha as configurações da sua instalação:

| Variável | Configuração |
|---|---|
| `DB_HOST` | Endereço do servidor MySQL. |
| `DB_PORT` | Porta do MySQL, normalmente `3306`. |
| `DB_NAME` | Nome do banco. Para o esquema local do projeto, use `bolo`. |
| `DB_USER` e `DB_PASSWORD` | Usuário e senha da conta da aplicação. Mantenha esses valores fora do Git. |
| `DB_SSL` | Use `true` quando a conexão exigir TLS. |
| `DB_SSL_CA` | Certificado da autoridade certificadora em PEM, quando exigido pelo provedor. |

**3. Iniciar a API e o front-end**

Em um terminal, inicie a API:

```bash
npm run server
```

Em outro terminal, também na raiz, inicie o React:

```bash
npm start
```

Abra [http://localhost:3000](http://localhost:3000). O Express escuta em `127.0.0.1:3001`, e o proxy de desenvolvimento encaminha as requisições de `/api` para ele. Para testar o fluxo no ambiente local, cadastre um anúncio em **Quero vender**, procure-o em **Bolos** e recarregue a página para conferir a persistência.

Para compilar o front-end para produção, execute `npm run build`. Os arquivos gerados ficam em `build/`.

## Publicação na Vercel

A configuração em `vercel.json` usa `npm run build`, serve a pasta `build/` e mantém o acesso direto às rotas do React. A função `api/bolos.js` reutiliza a aplicação Express. A conexão com o MySQL usa as variáveis cadastradas nas configurações da Vercel para o ambiente correspondente. O código habilita TLS na Vercel e aceita uma CA específica quando o provedor a exige. A branch `ab2-preview` foi usada para preparar a visualização da AB2.

## Contexto acadêmico

O projeto dá continuidade à página inicial da AB1. Na AB2, integra rotas, componentes com props, ícones, eventos `onChange` e `onClick`, estados com `useState`, renderização condicional e persistência em MySQL. O fluxo de cadastro e consulta conecta esses recursos à proposta de facilitar a divulgação e a descoberta de bolos caseiros.
