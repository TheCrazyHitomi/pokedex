import { useState } from 'react';
import './App.css'
import PokemonCard, { Pokemon } from './components/PokemonCard'


const pokemonList:Pokemon[] = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {

  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = (index :number) => {
    setPokemonIndex(index)
  }
  
  return (
    <div>
      <nav>
      
        {pokemonList.map((pokemon, index) => (
          <button key={pokemon.name} onClick={()=>handleClick(index)}>
            {pokemon.name}
          </button>
        ))}
      
      </nav>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
  );
}

export default App
