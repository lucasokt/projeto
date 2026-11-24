const express = require('express');
const db = require('./db');

const app = express();
const categorias = ['Chocolate', 'Tradicionais', 'Especiais'];
const mensagemBanco = 'Não foi possível acessar o banco de dados. Tente novamente.';

app.use(express.json({ limit: '16kb' }));

function lerTexto(valor) {
  return typeof valor === 'string' ? valor.trim() : '';
}

function responderErroBanco(erro, resposta) {
  console.error('Falha ao consultar ou gravar bolos:', erro.code || 'erro desconhecido');
  resposta.status(503).json({ mensagem: mensagemBanco });
}

app.get('/api/bolos', async (_requisicao, resposta) => {
  resposta.set('Cache-Control', 'no-store');

  try {
    const [bolos] = await db.execute(
      'SELECT id, nome, produtor, cidade, categoria, descricao, preco FROM bolos ORDER BY id DESC'
    );
    resposta.json(bolos);
  } catch (erro) {
    responderErroBanco(erro, resposta);
  }
});

app.post('/api/bolos', async (requisicao, resposta) => {
  const dados = requisicao.body ?? {};
  const nome = lerTexto(dados.nome);
  const produtor = lerTexto(dados.produtor);
  const cidade = lerTexto(dados.cidade);
  const descricao = lerTexto(dados.descricao);
  const { categoria } = dados;
  const preco = typeof dados.preco === 'number' ? String(dados.preco) : lerTexto(dados.preco);

  if (!nome || !produtor || !cidade || !descricao
      || nome.length > 120 || produtor.length > 120 || cidade.length > 120 || descricao.length > 1000
      || !categorias.includes(categoria)) {
    return resposta.status(400).json({ mensagem: 'Preencha os campos obrigatórios com valores válidos.' });
  }

  if (!/^\d{1,8}(?:\.\d{1,2})?$/.test(preco) || Number(preco) <= 0) {
    return resposta.status(400).json({ mensagem: 'Informe um preço maior que zero, com até duas casas decimais.' });
  }

  try {
    const [resultado] = await db.execute(
      'INSERT INTO bolos (nome, produtor, cidade, categoria, descricao, preco) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, produtor, cidade, categoria, descricao, preco]
    );
    return resposta.status(201).json({ id: resultado.insertId });
  } catch (erro) {
    responderErroBanco(erro, resposta);
  }
});

app.use((erro, _requisicao, resposta, _proximo) => {
  if (erro.type === 'entity.too.large') {
    return resposta.status(413).json({ mensagem: 'Os dados do anúncio excedem o tamanho permitido.' });
  }

  return resposta.status(400).json({ mensagem: 'Não foi possível ler os dados do anúncio.' });
});

module.exports = app;
