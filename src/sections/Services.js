import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: '⚙️',
    accent: '#00d4ff',
    title: 'Sistema ERP',
    desc: 'Gestão empresarial integrada e personalizada para otimizar todos os processos do seu negócio em uma única plataforma robusta.',
    tags: ['Financeiro', 'Estoque', 'RH', 'Fiscal'],
  },
  {
    icon: '📱',
    accent: '#7b2fff',
    title: 'Aplicativos Móveis',
    desc: 'Desenvolvimento de apps nativos e híbridos para iOS e Android com design intuitivo, alta performance e UX focada em resultado.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    icon: '🤖',
    accent: '#00ff88',
    title: 'Prometheus Automações',
    desc: 'Automação inteligente de processos empresariais com IA e RPA, reduzindo custos operacionais e aumentando a eficiência.',
    tags: ['RPA', 'Inteligência Artificial', 'Bots', 'Workflows'],
  },
  {
    icon: '🏢',
    accent: '#ff6b35',
    title: 'TOTVS',
    desc: 'Consultoria especializada, implementação e suporte completo em toda a linha de soluções TOTVS: Protheus, Fluig e Carol.',
    tags: ['Protheus', 'Fluig', 'Carol', 'Consultoria'],
  },
  {
    icon: '🏛️',
    accent: '#00d4ff',
    title: 'Clube Gov.br',
    desc: 'Plataforma digital exclusiva que conecta cidadãos e empresas ao ecossistema gov.br com integração e segurança certificada.',
    tags: ['Gov.br', 'Digital', 'Serviços', 'Integração'],
  },
  {
    icon: '💡',
    accent: '#a78bfa',
    title: 'Auftek Platform',
    desc: 'Plataforma proprietária de inovação com soluções customizadas, analytics avançado e inteligência artificial embarcada.',
    tags: ['Cloud', 'API', 'Analytics', 'BI'],
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <span className="section-tag">Nossas Soluções</span>
        <h2 className="section-title">
          Tudo que sua empresa precisa em{' '}
          <span className="gradient-text">tecnologia</span>
        </h2>
        <p className="section-desc">
          Do ERP à automação com IA — oferecemos um ecossistema completo de soluções
          tecnológicas para transformar sua operação e acelerar o crescimento.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((svc) => (
          <div key={svc.title} className="service-card">
            <div
              className="service-icon-wrap"
              style={{ background: `${svc.accent}18`, border: `1px solid ${svc.accent}33` }}
            >
              <span className="service-icon">{svc.icon}</span>
            </div>

            <h3 className="service-title">{svc.title}</h3>
            <p className="service-desc">{svc.desc}</p>

            <div className="service-tags">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="service-tag"
                  style={{ color: svc.accent, borderColor: `${svc.accent}44`, background: `${svc.accent}0e` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="service-card-glow"
              style={{ background: `radial-gradient(circle at top left, ${svc.accent}12 0%, transparent 60%)` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
