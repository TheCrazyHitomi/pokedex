export interface Pokemon {
    name: string;
    imgSrc?: string;
    background?: string
}

export interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}


const Navbar = (props:NavBarProps) =>{

    const {setPokemonIndex, pokemonList} = props;

    const handleClick = (index:number) =>{

        setPokemonIndex(index)
        if(pokemonList[index].name === "pikachu"){
            alert("Pika Pikachu !!!");
        }
    }


    return(
        <nav className="navbar">
        {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name}  type="button" onClick={()=>handleClick(index)}>
            {pokemon.name}
            </button>
        ))}
        </nav>
    )
}

export default Navbar;