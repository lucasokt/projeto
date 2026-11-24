import React, { useEffect, useState } from 'react';
import CardBolo from '../components/CardBolo';
import exemplos from '../dados/bolos';

function normalizarTexto(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function Bolos() {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');
  const [anuncios, setAnuncios] = useState([]);
  const [situacao, setSituacao] = useState('carregando');
  const termo = normalizarTexto(busca.trim());

  useEffect(() => {
    const controle = new AbortController();

    async function carregarAnuncios() {
      try {
        const resposta = await fetch('/api/bolos', {
          headers: { Accept: 'application/json' },
          signal: controle.signal,
        });
        if (controle.signal.aborted) return;

        if (!resposta.ok) {
          setSituacao('erro');
          return;
        }

        const dados = await resposta.json();
        if (controle.signal.aborted) return;

        if (!Array.isArray(dados)) {
          setSituacao('erro');
          return;
        }

        setAnuncios(dados);
        setSituacao('pronto');
      } catch {
        if (!controle.signal.aborted) setSituacao('erro');
      }
    }

    carregarAnuncios();
    return () => controle.abort();
  }, []);

  function correspondeAosFiltros(bolo) {
    const correspondeBusca = normalizarTexto(bolo.nome).includes(termo)
      || normalizarTexto(bolo.produtor).includes(termo);
    const correspondeCategoria = categoria === 'Todos' || bolo.categoria === categoria;
    return correspondeBusca && correspondeCategoria;
  }

  const anunciosFiltrados = anuncios.filter(correspondeAosFiltros);
  const exemplosFiltrados = exemplos.filter(correspondeAosFiltros);
  const nenhumResultado = anunciosFiltrados.length === 0 && exemplosFiltrados.length === 0;

  function limparFiltros() {
    setBusca('');
    setCategoria('Todos');
  }

  return (
    <main className="pagina">
      <h1>Encontrar um bolo</h1>
      <p>Conheça os bolos e produtores da vitrine.</p>

      <div className="pagina-filtros">
        <label>
          Buscar por nome ou produtor
          <input
            type="search"
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
          />
        </label>
        <label>
          Categoria
          <select value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
            <option>Todos</option>
            <option>Chocolate</option>
            <option>Tradicionais</option>
            <option>Especiais</option>
          </select>
        </label>
        <button className="limpar-filtros" type="button" onClick={limparFiltros}>
          Limpar filtros
        </button>
      </div>

      <section className="vitrine-secao" aria-labelledby="titulo-anuncios">
        <h2 id="titulo-anuncios">Anúncios cadastrados</h2>
        {situacao === 'carregando' && <p role="status">Carregando anúncios…</p>}
        {situacao === 'erro' && <p role="status">Não foi possível carregar os anúncios. Tente novamente.</p>}
        {situacao === 'pronto' && !nenhumResultado && anunciosFiltrados.length === 0 && (
          <p>{anuncios.length === 0 ? 'Nenhum anúncio cadastrado ainda.' : 'Nenhum anúncio corresponde aos filtros.'}</p>
        )}
        {anunciosFiltrados.length > 0 && (
          <div className="pagina-cards">
            {anunciosFiltrados.map(({ id, nome, produtor, categoria, cidade, preco, descricao }) => (
              <CardBolo
                key={id}
                nome={nome}
                produtor={produtor}
                categoria={categoria}
                detalhes={{ cidade, preco, descricao }}
              />
            ))}
          </div>
        )}
      </section>

      {exemplosFiltrados.length > 0 && (
        <section className="vitrine-secao" aria-labelledby="titulo-exemplos">
          <h2 id="titulo-exemplos">Exemplos da AB1</h2>
          <div className="pagina-cards">
            {exemplosFiltrados.map(({ id, ...bolo }) => <CardBolo key={id} {...bolo} />)}
          </div>
        </section>
      )}

      {situacao === 'pronto' && nenhumResultado && (
        <p role="status">Nenhum bolo encontrado</p>
      )}
    </main>
  );
}
