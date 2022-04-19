import './RepositorioItem.css';

function RepositorioItem(props) {
  return (
    <div className="RepositorioItem">
        <h1>{props.repoNome}</h1> 
    </div>
  );
}

export default RepositorioItem;
