import React from 'react';
import { Link } from 'react-router-dom';

export default function ComoFunciona() {
  return (
    <main className="pagina">
      <h1>Como funciona</h1>
      <p>Três passos simples, do forno à mesa, sem pressa.</p>

      <div className="pagina-cards">
        <section className="passo">
          <h2>Anuncie seu bolo</h2>
          <p>Apresente sua receita, diga onde você faz o bolo e informe o preço.</p>
          <Link to="/anunciar">Quero vender</Link>
        </section>

        <section className="passo">
          <h2>Escolha o festival</h2>
          <p>Os festivais reúnem produtores e pessoas que querem provar bolos. Conheça a proposta e procure uma edição na sua cidade.</p>
        </section>

        <section className="passo">
          <h2>Sirva sua fatia</h2>
          <p>No dia do festival, prepare a mesa, compartilhe fatias com quem passar e conte a história da sua receita.</p>
        </section>
      </div>
    </main>
  );
}
