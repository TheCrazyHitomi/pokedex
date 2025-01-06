import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'


const pokemonList = [
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
  
  const handleClickPrecedent = () => {
    setPokemonIndex(pokemonIndex -1);
  }
  
  
  const handleClickSuivant = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  
  
  return (
    <div>
      <PokemonCard imgSrc={pokemonList[pokemonIndex].imgSrc} name={pokemonList[pokemonIndex].name}/>
      <button disabled={pokemonIndex > 0 ? false : true} onClick={handleClickPrecedent} >Précédent</button>
      <button disabled={pokemonIndex < pokemonList.length - 1 ? false : true} onClick={handleClickSuivant} >Suivant</button>
    </div>
  )
}

export default App
