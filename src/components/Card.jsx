import '../css/card.css'
import closeIcon from '../assets/icons8-close-50.png'

function Card({id, location, country, description, src, isVisited, onDelete}){
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="card hover:close-button-visible">
            <img alt="img" src={src} className='card-image'></img>
            <div className="card-text">
                <h3>{location}</h3>
                <h4>{country}</h4>
                <p>{description}</p>
                {/*<span className="pt-5">{isVisited ? "✔ visited" : "✖ not visited"}</span>*/}
                {isVisited && <span className="pt-5">✔ visited</span>}
                {!isVisited && <span className="pt-5">✖ not visited</span>}
            </div>
            
            <button type='button' className='close-button' onClick={handleDelete}>
                <img src={closeIcon} className='close-icon'></img>
            </button>
            
        </div>
    )
}

export default Card;