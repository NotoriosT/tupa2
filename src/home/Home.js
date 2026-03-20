import React from 'react';
import './home.css';
import Typewriter from '../rotative/Rotative';

function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section id="hero" className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Tecnologia &amp; Inovação
          </div>

          <h1 className="hero-title">
            Soluções Digitais para
            <span className="typewriter-wrap">
              <Typewriter
                words={['Empresas Modernas', 'Gestão Inteligente', 'Automação Total', 'Futuro Digital']}
                speed={80}
              />
            </span>
          </h1>

          <p className="hero-subtitle">
            Desenvolvemos sistemas ERP, aplicativos móveis e automações com IA
            para transformar a gestão do seu negócio e impulsionar resultados.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Fale Conosco →
            </a>
            <a href="#services" className="btn-outline">
              Nossos Serviços
            </a>
          </div>

          <div className="hero-chips">
            {[
              { label: 'ERP', color: '#00d4ff' },
              { label: 'Apps Móveis', color: '#7b2fff' },
              { label: 'Prometheus', color: '#00ff88' },
              { label: 'TOTVS', color: '#ff6b35' },
              { label: 'Gov.br', color: '#00d4ff' },
              { label: 'Auftek', color: '#a78bfa' },
            ].map((chip) => (
              <span key={chip.label} className="hero-chip">
                <span className="chip-dot" style={{ background: chip.color }} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <div className="stats-bar">
        <div className="stats-grid">
          {[
            { num: '200+', label: 'Clientes Ativos' },
            { num: '98%', label: 'Satisfação' },
            { num: '15+', label: 'Anos de Mercado' },
            { num: '50+', label: 'Especialistas' },
          ].map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
