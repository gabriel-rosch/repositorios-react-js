import { useState } from 'react';
import './App.css';
import RepositorioItem from './RepositorioItem';

function App() {
  const [pesquisa, setPesquisa] = useState('');
 
  function buscarRepositorios() {
    alert(pesquisa)
  }

  return (
    <div className="App">
      <div className="Pesquisa">
        <input 
          value={pesquisa}
          onChange={(e)=>{setPesquisa(e.target.value)}}
          placeholder="Digite o nome do repositório"
        ></input>
        <button
          onClick={buscarRepositorios}
        >
          Pesquisar
        </button>
      </div>
      <RepositorioItem/>
      <RepositorioItem repoNome="Face Book"/>
    </div>
  );
}

export default App;
