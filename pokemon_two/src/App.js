import { useEffect, useState } from "react";
import Pokemon from '../src/components/cardPokemon'
function App() {
  const [pokemons, setPokemos]=useState([]);
  const [load, setLoad]=useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const getPokemons= async()=>{
    const res= await fetch(load);
    const data = await res.json();
    setLoad(data.next)
    function createPokeObject(results){
      results.forEach(async (result) => {
          const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`)
          const data = await res.json()
          setPokemos(list => [...list, data])
      });
    }
    createPokeObject(data.results)
  }
  useEffect(()=>{
    getPokemons();
  },[])
  console.log("Prueba revert 1")
  return (
    <div className="cantainer">
      <div className="nav-main">
        <h1>Pokemon</h1>
        <div className="link">
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/Adxell/pokemon_two"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="pokemon-container">
        <div className="all-container">
          {pokemons.map((pokemon, index) => (
            <Pokemon
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
        <div className="button">  
        <button className="load-more" onClick={() => getPokemons()}>
          Load More
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
