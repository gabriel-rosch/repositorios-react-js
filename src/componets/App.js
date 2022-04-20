import { useState } from 'react';
import RepositorioItem from './RepositorioItem';
import api from '../services/api'


import './App.css';
function App() {
  const [pesquisa, setPesquisa] = useState('');
  const [repoData, setRepoData] = useState(null);
  
  async function buscarRepositorios() {
    //https://api.github.com/repos/facebook/react
    
    const reponse = await api.get(`repos/${pesquisa}`)
      .catch(()=>{
          alert("Repositório não encontrado!")
      })
    setRepoData(reponse.data);
    //reponse.data.description
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
      { repoData &&
        <RepositorioItem data={repoData} />
      }
    </div>
  );
}

export default App;
