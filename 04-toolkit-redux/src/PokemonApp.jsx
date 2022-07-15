import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    pokemons = [],
    isLoading,
    page,
  } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>

      <hr />
      {isLoading ? <span key="loading">Loading...</span> : null}
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};

export default PokemonApp;
