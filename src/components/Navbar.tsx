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


    return(
        <nav className="navbar">
        {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name}  type="button" onClick={()=>setPokemonIndex(index)}>
            {pokemon.name}
            </button>
        ))}
        </nav>
    )
}

export default Navbar;