# Bolo — Festivais de Fatias

O Bolo é um projeto acadêmico da AB2 de Programação Web I. Ele apresenta a proposta dos festivais de fatias e permite que produtores anunciem bolos e visitantes encontrem anúncios na vitrine.

## Funcionalidades

- **Início** apresenta o projeto e os destaques da AB1.
- **Como funciona** explica as etapas de participação nos festivais.
- **Bolos** exibe os anúncios cadastrados e os exemplos da AB1 em seções separadas. A busca por nome ou produtor pode ser combinada com o filtro por categoria.
- **Quero vender** valida e envia os dados do bolo. A API grava o anúncio no MySQL, e a vitrine o consulta mesmo depois de atualizar a página.

## Tecnologias

React com Create React App, React Router, React Icons e CSS com Flexbox no frontend. Node.js e Express na API, com MySQL 8.4 e o driver `mysql2`. Os endpoints `GET /api/bolos` e `POST /api/bolos` consultam e cadastram anúncios, respectivamente.

## Executar localmente

1. Use Node.js 20.6 ou superior e MySQL 8.4. Na pasta do projeto, instale as dependências com `npm ci`.
2. No cliente MySQL, em uma sessão administrativa, execute `SOURCE server/schema.sql` a partir da pasta do projeto. O script prepara `bolo.bolos` caso a tabela ainda não exista. Se já houver uma conta da aplicação, reutilize-a e confira suas permissões. Para criar a conta local pela primeira vez, use:

   ```sql
   CREATE USER 'bolo_app'@'127.0.0.1' IDENTIFIED BY RANDOM PASSWORD;
   GRANT SELECT, INSERT ON bolo.bolos TO 'bolo_app'@'127.0.0.1';
   ```

3. Se `server/.env` ainda não existir, copie o modelo no PowerShell com `Copy-Item server/.env.example server/.env`. Preencha `DB_PASSWORD` localmente com a senha da conta da aplicação e confira host, porta, banco e usuário. O padrão local é `127.0.0.1:3306`, banco `bolo` e `DB_SSL=false`. O arquivo real é ignorado pelo Git.
4. Em um terminal, execute `npm run server` para iniciar o Express na porta 3001. Em outro, execute `npm start` e abra [localhost:3000](http://localhost:3000). O proxy do React encaminha `/api` ao Express.
5. Cadastre um bolo em **Quero vender**. Em **Bolos**, procure pelo nome e atualize a página para conferir se o anúncio continua na vitrine.

Use `npm run build` para compilar o frontend em `build/`.

## Preview na Vercel

O projeto usa `vercel.json` para servir o build do React, manter as rotas ao recarregar e encaminhar `/api/bolos` à função que reutiliza o Express. A branch de Preview é `ab2-preview`. Cadastre em **Settings → Environment Variables**, no ambiente **Preview**, as variáveis do MySQL online. Use os valores do painel do Enzonic.

| Variável | Valor |
|---|---|
| `DB_HOST` | Host do MySQL mostrado no Enzonic, sem protocolo nem porta. |
| `DB_PORT` | Porta indicada no painel do Enzonic. |
| `DB_NAME` | `main`, onde está a tabela `bolos`. |
| `DB_USER` | Usuário da conexão MySQL do Enzonic. |
| `DB_PASSWORD` | Senha desse usuário, cadastrada como segredo na Vercel. |
| `DB_SSL` | `true`. |
| `DB_SSL_CA` | Certificado CA em PEM, apenas se o provedor exigir uma CA própria. Com certificado reconhecido pelo Node.js, deixe a variável ausente. |

Use uma conta com permissões de consulta e cadastro sobre `main.bolos`. Depois de gerar o Preview, abra as quatro páginas, cadastre um bolo de demonstração e confira a vitrine após recarregar. Faça essa validação antes de integrar a branch à `main`.
