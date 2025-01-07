export interface Pokemon{
    name: string,
    imgSrc?: string,
    background?: string
};

const PokemonCard =(props:{pokemon:Pokemon}) =>{
    const {pokemon}=props
    const {imgSrc, name} = pokemon;
    
        return (
            <div className="card" style={{backgroundColor:pokemon.background}}>
                {imgSrc ?
                <img className="card-img" src={imgSrc} alt={name} /> 
            : <p>???</p> }
            <p>
                <figcaption className="title">{name}</figcaption>
            </p>
            </div>
        );
    }

export default PokemonCard;