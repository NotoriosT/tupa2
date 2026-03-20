import './App.css';
import Cabecalho from './cabecalho/cabecalho/Cabelhaco';
import Home from './home/Home';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
