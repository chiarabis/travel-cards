import '../css/card.css'

function Card({id, location, country, description, src, isVisited}){
    return (
        <div className="card">
            <img alt="img" src={src}></img>
            <div className="card-text">
                <h3>{location}</h3>
                <h4>{country}</h4>
                <p>{description}</p>
                {/*<span className="pt-5">{isVisited ? "✔ visited" : "✖ not visited"}</span>*/}
                {isVisited && <span className="pt-5 text-green-600">✔ visited</span>}
                {!isVisited && <span className="pt-5 text-red-600">✖ not visited</span>}
            </div>
        </div>
    )
}

export default Card;