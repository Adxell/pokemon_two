import { useEffect, useState } from "react";
function App() {
  const [pokemons, setPokemos]=useState([]);
  const [load, setLoad]=useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const getPokemons= async()=>{
    const res= await fetch(load);
    const data = await res.json();
    setLoad(data.next)
    console.log(data)
  }
  useEffect(()=>{
    getPokemons();
  },[])
  return (
    <div className="cantainer">
      <h1>Pokemo</h1>
      <div className="pokemon-container">
        <div className="all-container">

        </div>
        <button className="load-more">Load More</button>
      </div>
    </div>
  );
}

export default App;
