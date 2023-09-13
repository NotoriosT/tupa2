import React from 'react';
import './home.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Rotative from '../rotative/Rotative';

function Home() {
    return (
        <ParallaxProvider>
            <main className="main">
                <section className="section" id="section1">
                    <Parallax y={[-20, 20]}>
                        <div className="parallax-content">
                            <div className="text-over-parallax">

                                <h1>Desenvolvemos
                                    <Rotative
                                        words={['Software', 'Inteligência Artificial', 'Segurança']}
                                        speed={100} // Ajuste a velocidade conforme necessário
                                    />
                                    para Empresas.
                                </h1>

                                <div className="sub-text-container">
                                    <div className="sub-text">
                                        <img className="icones" src="/img/Home/software.png" alt="Ícone de programação" />
                                    </div>
                                    <div className="sub-text ">
                                        <img className="icones" src="/img/Home/cadeado.png" alt="Ícone de Cadeado" />
                                    </div>
                                    <div className="sub-text">
                                        <img className="icones" src="/img/Home/inteligencia-artificial.png" alt="Ícone de programação" />
                                    </div>
                                </div>
                            </div>
                            <img
                                src="/img/home/nasa2.jpg"
                                alt="planeta terra"
                                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </Parallax>
                </section>

                <section className="section" id="section2">
                    <Parallax y={[-20, 20]}>
                        <div className="parallax-content">
                            <h1>Outra Seção com Parallax</h1>
                            <p>Mais conteúdo com efeito de parallax.</p>
                        </div>
                    </Parallax>
                </section>

                {/* Adicione mais seções conforme necessário */}
            </main>
        </ParallaxProvider>
    );
}

export default Home;
