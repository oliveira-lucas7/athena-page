import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Portal from './components/Portal';
import Inovacao from './components/Inovacao';
import Aprendizado from './components/Aprendizado';
import Reconhecimento from './components/Reconhecimento';
import Equipe from './components/Equipe';
import Footer from './components/Footer';
import Beneficios from './components/Beneficios';

function App() {
  return (
    <div className="App">
      <Header/>
      <Portal/>
      <Inovacao/>
      <Aprendizado/>
      <Beneficios/>
      <Reconhecimento/>
      <Equipe/>
      <Footer/>
    </div>
  );
}

export default App;
