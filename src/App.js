import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div>
          <p>Bolo</p>
          <span>FESTIVAIS DE FATIAS</span>
        </div>
        <a href="/">Participar</a>
      </header>

      <section className="hero">
        <div className="hero-texto">
          <p className="eyebrow">BOLOS FEITOS PARA SEREM LEMBRADOS</p>

          <h1>
            Cada fatia <br />
            tem <span>uma história.</span>
          </h1>

          <p className="descricao">
            Bolos caseiros, feitos por pessoas reais e entregues para momentos
            que merecem ser celebrados.
          </p>

          <div className="hero-botoes">
            <button>Encontrar um bolo</button>
            <button>Como funciona</button>
          </div>

          <div className="hero-numeros">
            <div>
              <strong>120+</strong>
              <span>bolos disponíveis</span>
            </div>
            <div>
              <strong>18</strong>
              <span>confeiteiras locais</span>
            </div>
            <div>
              <strong>9</strong>
              <span>cidades atendidas</span>
            </div>
          </div>
        </div>

        <div className="hero-imagem">
          <img
            src="/imagens/b5e4c610-98a8-4c64-a36b-a4c1a3c02bb1.jpg"
            alt="Fatia de bolo em um prato"
          />
        </div>
      </section>

      <section className="como-funciona">
        <h2>Como funciona</h2>
        <p>Três passos simples, do forno à mesa, sem pressa.</p>
        <div className="passos">
          <div className="passo">
            <p className="numero-passo">01</p>
            <h3>Anuncie seu bolo</h3>
            <p>Conte o que torna sua receita especial.</p>
          </div>
          <div className="passo">
            <p className="numero-passo">02</p>
            <h3>Escolha o festival</h3>
            <p>Apareça na lista de uma cidade e seja convidado pela comunidade.</p>
          </div>
          <div className="passo">
            <p className="numero-passo">03</p>
            <h3>Sirva sua fatia</h3>
            <p>No dia, é só postar a mesa e partilhar com quem passou.</p>
          </div>
        </div>
      </section>

      <section className="maos-ao-forno">
        <h2>Mãos ao forno</h2>
        <p>Produtores e mesas que abrem caminho para o próximo festival.</p>
        
        <div className="bolocontainer">
          <div className='bolo'>
            <img src="/imagens/75286c53-484b-4416-bc60-987a1b651b9a.jpg" alt="bolo cobertura branca"/>
            <h3>Bolo de cenoura com brigadeiro</h3>
            <p>Dona Célia</p>
          </div>
          
          <div className='bolo'>
            <img src="imagens/69e642bf-6511-4a2f-b1f3-c9911e999f1a.jpg" alt="bolo de chocolate"/>
            <h3>Fudge de chocolate belga</h3>
            <p>Padaria do Theo</p>
          </div>
          
          <div className='bolo'>
            <img src="imagens/c5260f9c-c818-4a0b-a5bc-a211296d96fa.jpg" alt="red velvet"/>
            <h3>Red velvet com laranja</h3>
            <p>Maré de Doce</p>
          </div>
        </div>
      </section>

      <section className='chamada-final'>
        <div className= "chamada-final-container">
          <h2 className='chamada-titulo'>A mesa está posta. Falta você.</h2>
          <p id='chamada-longa'>Seja quem assa ou quem saboreia, tem um lugar na toalha. Reserve sua fatia de conversa.</p>
          <div className='chamada-botoes'>
            <button className='btnecontrar'>Encontrar um bolo</button>
            <button className='btnvender'>Quero vender</button>
          </div>
        </div>
      </section>
      
      <footer className='footer'>
        <div className='footer-infors'>
          <h2>BOLO</h2>
          <p>Festas de fatias, histórias e receitas feitas com carinho.</p>
        </div>
        <div className='contato'>
          <a href="https://wa.me/5585999990000">WhatsApp</a>
        </div>
        <p className='footer-copy'>© 2026 Bolo. Feito com carinho.</p>
      </footer>
    </>
  );
}
export default App;
