import React from 'react';
import './About.css';

const FEATURES = [
  {
    icon: '🚀',
    title: 'Inovação Contínua',
    desc: 'Adotamos as mais recentes tecnologias para manter sua empresa sempre à frente da concorrência.',
  },
  {
    icon: '🔒',
    title: 'Segurança & Conformidade',
    desc: 'Soluções desenvolvidas com os mais altos padrões de segurança e conformidade regulatória (LGPD).',
  },
  {
    icon: '🤝',
    title: 'Suporte Dedicado',
    desc: 'Time especializado disponível para suporte técnico, treinamento e evolução contínua dos sistemas.',
  },
  {
    icon: '📊',
    title: 'Resultados Mensuráveis',
    desc: 'Dashboards e relatórios em tempo real para acompanhar o impacto de cada solução no seu negócio.',
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-bg-glow" />

      <div className="about-container">
        {/* Left: Visual */}
        <div className="about-visual">
          <div className="about-card-main">
            <div className="about-ai-visual">
              <div className="ai-rings">
                <div className="ai-ring ai-ring-1" />
                <div className="ai-ring ai-ring-2" />
                <div className="ai-ring ai-ring-3" />
                <div className="ai-core">
                  <span>AT</span>
                </div>
              </div>
            </div>
            <div className="about-card-info">
              <div className="about-pill">
                <span className="about-pill-dot" />
                Transformando empresas desde 2009
              </div>
              <h3>Tecnologia que gera resultado</h3>
              <p>
                Especialistas em integrar processos empresariais com tecnologia de ponta,
                entregando soluções que reduzem custos e aumentam a produtividade.
              </p>
            </div>
          </div>

          {/* Floating badges */}
          <div className="float-badge float-badge-1">
            <span className="badge-icon">⚡</span>
            <div>
              <strong>+40%</strong>
              <span>Produtividade</span>
            </div>
          </div>
          <div className="float-badge float-badge-2">
            <span className="badge-icon">💰</span>
            <div>
              <strong>-30%</strong>
              <span>Custos Operacionais</span>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <span className="section-tag">Sobre Nós</span>
          <h2 className="section-title" style={{ textAlign: 'left', margin: '1rem 0 1.25rem' }}>
            Sua parceira em{' '}
            <span className="gradient-text">transformação digital</span>
          </h2>
          <p className="about-lead">
            Somos uma empresa de tecnologia focada em entregar soluções que realmente
            transformam a forma como as empresas operam, crescem e se destacam no mercado.
          </p>

          <div className="about-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature-row">
                <div className="feature-icon-box">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta">
            <a href="#contact" className="btn-primary">Conheça Nossa Empresa →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
