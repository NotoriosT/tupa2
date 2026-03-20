import React from 'react';
import './Footer.css';

const LINKS = {
  Serviços: ['Sistema ERP', 'Aplicativos Móveis', 'Prometheus Automações', 'TOTVS', 'Clube Gov.br', 'Auftek Platform'],
  Empresa: ['Sobre Nós', 'Nossa Equipe', 'Carreiras', 'Blog', 'Casos de Sucesso'],
  Suporte: ['Central de Ajuda', 'Documentação', 'Status do Sistema', 'Contato', 'LGPD'],
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">AT</div>
            <span className="footer-logo-text">Auftek</span>
          </div>
          <p>
            Transformamos empresas através da tecnologia. ERP, apps móveis,
            automações e muito mais — tudo em um só lugar.
          </p>
          <div className="footer-badge">
            <span className="footer-badge-dot" />
            Sistemas disponíveis 24/7
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([title, items]) => (
          <div key={title} className="footer-col">
            <h4>{title}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href="#hero">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} Auftek Tecnologia. Todos os direitos reservados.</p>
        <div className="footer-bottom-links">
          <a href="#hero">Política de Privacidade</a>
          <a href="#hero">Termos de Uso</a>
          <a href="#hero">LGPD</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
