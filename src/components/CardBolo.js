import React from 'react';

export default function CardBolo({ nome, produtor, imagem, categoria, detalhes }) {
  return (
    <article className="bolo">
      {imagem ? (
        <img src={imagem.src} alt={imagem.alt} />
      ) : (
        <div className="bolo-sem-foto">Sem foto</div>
      )}
      <h2>{nome}</h2>
      <p>{produtor} · {categoria}</p>
      {detalhes && (
        <div className="bolo-detalhes">
          <p>{detalhes.cidade} · {Number(detalhes.preco).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
          <p>{detalhes.descricao}</p>
        </div>
      )}
    </article>
  );
}
