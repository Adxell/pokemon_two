import { useEffect, useState } from "react";
import Pokemon from '../src/components/cardPokemon'
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
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
          console.log(data);
      });
    }
    createPokeObject(data.results)
  }
  console.log(load)

  
  useEffect(()=>{
    getPokemons();
  },[])

  return (
    <div className="cantainer">
      <div className="nav-main">
        <FontAwesomeIcon icon={["fas", "coffee"]} />
        <h1>Pokemon</h1>
        <div className="link">
        <a href="/">
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
        <button className="load-more" onClick={() => getPokemons()}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
