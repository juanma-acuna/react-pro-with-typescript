// Thunks are functions that does delayed (asyncronous) actions.

import { pokemonApi } from "../../../api/pokemonApi";
import { startLoadingPokemons, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const interval = 10;
    const { data } = await pokemonApi.get(
      `pokemon?offset=${page * interval}&limit=${interval}`
    );
    dispatch(
      setPokemons({
        pokemons: data.results,
        page: page + 1,
      })
    );
  };
};

export const getPokemonsWithFetch = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const interval = 10;
    const { data } = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        page * interval
      }&limit=${interval}`
    );
    const json = await data.json();
    dispatch(
      setPokemons({
        pokemons: json.results,
        page: page + 1,
      })
    );
  };
};
