import React, { useState } from 'react';

const formularioInicial = {
  nome: '',
  produtor: '',
  cidade: '',
  categoria: '',
  descricao: '',
  preco: '',
};

const erroEnvio = 'Não foi possível enviar o anúncio. Tente novamente.';

export default function Anunciar() {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  function atualizarCampo(evento) {
    const { name, value } = evento.target;
    setFormulario((anterior) => ({ ...anterior, [name]: value }));
    setMensagem('');
  }

  async function enviarAnuncio(evento) {
    evento.preventDefault();
    if (enviando) return;

    const preco = Number(formulario.preco);
    if (Object.values(formulario).some((valor) => !valor.trim()) || !Number.isFinite(preco) || preco <= 0) {
      setMensagem('Preencha todos os campos e informe um preço maior que zero.');
      return;
    }

    setMensagem('');
    setEnviando(true);
    try {
      const resposta = await fetch('/api/bolos', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formulario, preco }),
      });

      if (resposta.status === 201) {
        setFormulario(formularioInicial);
        setMensagem('Anúncio cadastrado! Seu bolo já aparece na vitrine.');
      } else if (resposta.status === 400) {
        const dados = await resposta.json();
        setMensagem(dados.mensagem || erroEnvio);
      } else {
        setMensagem(erroEnvio);
      }
    } catch {
      setMensagem(erroEnvio);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="pagina">
      <h1>Quero vender</h1>

      <form className="pagina-formulario" onSubmit={enviarAnuncio}>
        <label>
          Nome do bolo
          <input name="nome" type="text" maxLength={120} required disabled={enviando}
            value={formulario.nome} onChange={atualizarCampo} />
        </label>
        <label>
          Produtor
          <input name="produtor" type="text" maxLength={120} required disabled={enviando}
            value={formulario.produtor} onChange={atualizarCampo} />
        </label>
        <label>
          Cidade
          <input name="cidade" type="text" maxLength={120} required disabled={enviando}
            value={formulario.cidade} onChange={atualizarCampo} />
        </label>
        <label>
          Categoria
          <select name="categoria" required disabled={enviando} value={formulario.categoria} onChange={atualizarCampo}>
            <option value="" disabled>Escolha uma categoria</option>
            <option>Chocolate</option>
            <option>Tradicionais</option>
            <option>Especiais</option>
          </select>
        </label>
        <label>
          Descrição
          <textarea name="descricao" rows={4} maxLength={1000} required disabled={enviando}
            value={formulario.descricao} onChange={atualizarCampo} />
        </label>
        <label>
          Preço (R$)
          <input name="preco" type="number" min="0.01" max="99999999.99" step="0.01" required disabled={enviando}
            value={formulario.preco} onChange={atualizarCampo} />
        </label>
        <button type="submit" disabled={enviando}>{enviando ? 'Enviando…' : 'Enviar anúncio'}</button>
      </form>
      <div role="status">{mensagem && <p>{mensagem}</p>}</div>
    </main>
  );
}
