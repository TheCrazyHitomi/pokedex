import { useState } from 'react';
import './App.css'
import PokemonCard, { Pokemon } from './components/PokemonCard'
import Navbar from './components/navbar';


const pokemonList:Pokemon[] = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    background: "#78d99f",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    background: "#d99d78",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    background: "#78bfd9",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    background: "#d9c678",
  },
  {
    name: "mew",
    background: "#b278d9",
  },
];


function App() {

  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  
  return (
    <div>
      <Navbar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
  );
}

export default App
