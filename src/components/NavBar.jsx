import { useState } from "react";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickReturn = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  if (pokemonIndex === 0) {
    return (
      <div>
        {" "}
        <button onClick={handleClickNext}>Suivant</button>{" "}
      </div>
    );
  } else if (pokemonIndex === { pokemonList }.length - 1) {
    return (
      <div>
        {" "}
        <button onClick={handleClickReturn}>Précédent</button>{" "}
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <button onClick={handleClickReturn}>Précédent</button>{" "}
        <button onClick={handleClickNext}>Suivant</button>{" "}
      </div>
    );
  }
}

export default NavBar;
