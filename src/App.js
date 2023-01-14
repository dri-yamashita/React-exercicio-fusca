import fusca from './assets/png/fusca.png';
import './App.css';

function App(meuCarro) {
  console.log("modelo: ", meuCarro.modelo);
  console.log("placa: ", meuCarro.placa);
  console.log("cor: ", meuCarro.cor);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={fusca} className="App-logo" alt="fusca" />

        <h1>O modelo do meu carro é {meuCarro.modelo}</h1>
        <p>e a placa é {meuCarro.placa}</p>
        <small>Sua cor é {meuCarro.cor}</small>
       
      </header>
    </div>
  );
}

export default App;
