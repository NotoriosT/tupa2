import React, { useState } from 'react';
import './Contact.css';

const SERVICES_LIST = [
  'Sistema ERP',
  'Aplicativo Móvel',
  'Prometheus Automações',
  'TOTVS',
  'Clube Gov.br',
  'Auftek Platform',
  'Outro',
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-bg" />

      <div className="section-header">
        <span className="section-tag">Contato</span>
        <h2 className="section-title">
          Vamos <span className="gradient-text">conversar</span>?
        </h2>
        <p className="section-desc">
          Entre em contato e descubra como nossas soluções podem transformar o seu negócio.
        </p>
      </div>

      <div className="contact-wrapper">
        {/* Info cards */}
        <div className="contact-info">
          {[
            { icon: '📍', title: 'Localização', text: 'Brasil · Atendimento Nacional' },
            { icon: '📧', title: 'E-mail', text: 'contato@auftek.com.br' },
            { icon: '📞', title: 'Telefone', text: '+55 (11) 9 0000-0000' },
            { icon: '⏰', title: 'Atendimento', text: 'Seg–Sex, 08h–18h' },
          ].map((item) => (
            <div key={item.title} className="contact-info-card">
              <div className="contact-info-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}

          <div className="contact-social">
            <span>Siga-nos</span>
            <div className="social-links">
              {['in', 'ig', 'fb', 'yt'].map((s) => (
                <a key={s} href="/" className="social-btn">{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <div className="success-icon">✅</div>
              <h3>Mensagem enviada!</h3>
              <p>Obrigado pelo contato. Nossa equipe retornará em breve.</p>
              <button className="btn-primary" onClick={() => setSent(false)}>
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome completo *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 9 0000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Serviço de interesse</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte um pouco sobre sua empresa e o que você precisa..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary form-submit">
                Enviar Mensagem →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
