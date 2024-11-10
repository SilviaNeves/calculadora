import { useState } from 'react'
import './Styleds.scss';

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [resultado, setResultado] = useState(null);

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };
  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };
  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };
  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };
  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };
  const limpar = () => {
    setPrimeiroValor (0);
    setSegundoValor (0) ;
    setResultado (null);
  };
  return (
    <main>
      <h1>Calculadora</h1>
      {/* onchange evento de mudança */}
      <input
        type=""
        value={primeiroValor}
        onChange={capturandoPrimeiroValor}
        placeholder="Digite o primeiro valor"
      />
      <input
        type=""
        value={segundoValor}
        onChange={capturandoSegundoValor}
        placeholder="Digite o segundo valor"
      />
      <div className='buttons'>
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button onClick={multiplicacao}>x</button>
      <button onClick={divisao}>/</button>
        <button onClick={limpar}>Limpar</button>
        </div>
      <h3>{resultado}</h3>
    </main>
  );
}

