import { Pokemon } from "./navbar";

interface PokemonCardProps{
    pokemon:Pokemon
}

const PokemonCard =(props:PokemonCardProps) =>{
    const {pokemon}=props
    const {imgSrc, name} = pokemon;
    
        return (
            <div className="card" style={{backgroundColor:pokemon.background}}>
                {imgSrc ?
                <img className="card-img" src={imgSrc} alt={name} /> 
            : <p>???</p> }
            <div>
                <figcaption className="title">{name}</figcaption>
            </div>
            </div>
        );
    }

export default PokemonCard;