import axios from "axios";

// This is very useful because it allows us to send the same params to the API, once and anoter, without having to repeat them in the function call.
export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
