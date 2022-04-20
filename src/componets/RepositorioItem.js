import './RepositorioItem.css';
function RepositorioItem(props) {
  return (
    <div className="RepositorioItem">
        <img src={props.data.owner.avatar_url} alt='avatar'></img> 
        <div> 
            <h1>{props.data.name}</h1> 
            <p>{props.data.description}</p>
        </div>
    </div>
  );
}

export default RepositorioItem;
