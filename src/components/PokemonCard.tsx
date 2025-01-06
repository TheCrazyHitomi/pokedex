interface Pokemon{
    name: string,
    imgSrc?: string
};

const PokemonCard =({name, imgSrc}: Pokemon) =>{

    
        return (
            <div>
                {imgSrc ?
                <img src={imgSrc} alt={name} /> 
            : <p>???</p> }
            <p>
                <figcaption>{name}</figcaption>
            </p>
            </div>
        );
    }

export default PokemonCard;