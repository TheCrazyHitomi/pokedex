

const PokemonCard =({pokemon}) =>{

    
        return (
            <div>
                {pokemon.imgSrc ?
                <img src={pokemon.imgSrc} alt={pokemon.name} /> 
            : <p>???</p> }
            <p>
                <figcaption>{pokemon.name}</figcaption>
            </p>
            </div>
        );
    }

export default PokemonCard;